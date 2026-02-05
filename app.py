import os
import json
import time
import psutil
import io
from flask import Flask, render_template, request, jsonify
from flask_cors import CORS
from vosk import Model, KaldiRecognizer
from pydub import AudioSegment

# --- FFmpeg Configuration ---
os.environ["PATH"] += os.pathsep + r"C:\ffmpeg\bin"
AudioSegment.converter = r"C:\ffmpeg\bin\ffmpeg.exe"
AudioSegment.ffprobe = r"C:\ffmpeg\bin\ffprobe.exe"

app = Flask(__name__)
CORS(app)

# Load Vosk Model (Requirement: < 50MB)
MODEL_PATH = "model"
if not os.path.exists(MODEL_PATH):
    print("ERROR: 'model' folder not found!")

start_init = time.time()
model = Model(MODEL_PATH)
cold_start_time = time.time() - start_init

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/transcribe', methods=['POST'])
def transcribe():
    if 'audio' not in request.files:
        return jsonify({"error": "No audio file provided"}), 400
    
    # Requirement: Measure RAM usage
    process = psutil.Process(os.getpid())
    ram_usage = process.memory_info().rss / (1024 * 1024)

    try:
        # 1. Read the WebM file from the browser
        audio_file = request.files['audio']
        audio = AudioSegment.from_file(io.BytesIO(audio_file.read()))
        
        # 2. SIGNAL BOOSTER: Increase volume by 10dB so the AI hears medical terms better
        audio = audio + 10 
        
        # 3. CONVERT: 16kHz, Mono, 16-bit (Vosk Standard)
        audio = audio.set_frame_rate(16000).set_channels(1).set_sample_width(2)
        
        buf = io.BytesIO()
        audio.export(buf, format="wav")
        wav_data = buf.getvalue()

        # 4. TRANSCRIBE: Using open dictionary for better flexibility
        rec = KaldiRecognizer(model, 16000)
        rec.AcceptWaveform(wav_data)
        
        # Get result and strip the JSON formatting
        result = json.loads(rec.FinalResult())
        text_output = result.get("text", "")

        return jsonify({
            "text": text_output.capitalize() if text_output else "(No speech detected)",
            "metrics": {
                "ram_mb": f"{ram_usage:.2f} MB",
                "cold_start_sec": f"{cold_start_time:.2f} s",
                "model_size": "40 MB"
            }
        })
    except Exception as e:
        print(f"Transcription Error: {str(e)}")
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(host='127.0.0.1', port=5000, debug=True, threaded=True)