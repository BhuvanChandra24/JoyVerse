from flask import Flask, request, jsonify
from flask_cors import CORS
import torch
import numpy as np
from emotion_transformer import EmotionTransformer

app = Flask(__name__)
CORS(app)

device = torch.device("cuda" if torch.cuda.is_available() else "cpu")

model = EmotionTransformer(input_size=1404)  # 468 x 3
model.load_state_dict(torch.load(r'D:\PROJECTS\JoyVerse\flaskbackend\joyverse_model.pth',map_location=device))
model.to(device)
model.eval()

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()
    landmarks = data.get('landmarks')
    if not landmarks or len(landmarks) != 1404:
        return jsonify({'emotion': 'neutral'})  # fallback

    input_tensor = torch.tensor(landmarks, dtype=torch.float32).unsqueeze(0).to(device)

    with torch.no_grad():
        output = model(input_tensor)
        predicted = torch.argmax(output, dim=1).item()

    emotion_map = {
        0: "happy",
        1: "sad",
        2: "angry",
        3: "neutral",
        4: "surprise",
        5: "fear",
        6: "disgust"
    }
    emotion = emotion_map.get(predicted, "unknown")

    print(f"🧠 Received: {len(landmarks)} values → Predicted: {predicted} → Emotion: {emotion}")
    return jsonify({'emotion': emotion})

if __name__ == '__main__':
    app.run(debug=True)
