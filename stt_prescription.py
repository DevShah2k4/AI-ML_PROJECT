import os
import sys
import wave
import json
import time
import psutil
from vosk import Model, KaldiRecognizer

# 1. Define Medical Vocabulary for Biasing
# This restricts the model to only recognize these terms, significantly increasing accuracy.
medical_vocab = [
    "paracetamol", "amoxicillin", "ibuprofen", "aspirin", "metformin",
    "milligram", "milligrams", "mg", "tablet", "capsule",
    "once daily", "twice daily", "thrice daily", "after food", "before food",
    "[unk]" # Allow for unknown words
]

def run_stt(audio_path):
    # Footprint Measurement: Start Time & RAM
    start_time = time.time()
    process = psutil.Process(os.getpid())
    
    # Load Model (Ensure model folder is in same directory)
    if not os.path.exists("model"):
        print("Please download the 'vosk-model-small-en-us-0.15' and rename it to 'model'.")
        return

    model = Model("model")
    
    # Vocabulary Biasing (Functional Requirement 2)
    # Passing the list to KaldiRecognizer forces the engine to focus on these terms
    rec = KaldiRecognizer(model, 16000, json.dumps(medical_vocab))

    # Process Audio (Functional Requirement 1)
    wf = wave.open(audio_path, "rb")
    while True:
        data = wf.readframes(4000)
        if len(data) == 0:
            break
        rec.AcceptWaveform(data)

    final_result = json.loads(rec.FinalResult())
    transcription = final_result.get("text", "")

    # Footprint Metrics (Technical Requirement)
    end_time = time.time()
    ram_usage = process.memory_info().rss / (1024 * 1024)  # Convert to MB
    
    print(f"\n--- Output ---")
    print(f"Transcription: {transcription}")
    print(f"\n--- Footprint Metrics ---")
    print(f"Model Size: ~40 MB")
    print(f"RAM Usage: {ram_usage:.2f} MB")
    print(f"Cold Start/Inference: {end_time - start_time:.2f} seconds")

if __name__ == "__main__":
    # Example: python stt_prescription.py prescription_audio.wav
    if len(sys.argv) > 1:
        run_stt(sys.argv[1])
    else:
        print("Usage: python stt_prescription.py <path_to_wav_file>")