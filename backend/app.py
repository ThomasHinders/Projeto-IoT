from flask import Flask, jsonify
import requests

app = Flask(__name__)

# Chave da API de leitura do ThingSpeak e URL
THING_SPEAK_READ_API_KEY = 'G0EW22LQKBFIWLXN'
THING_SPEAK_CHANNEL_ID = '2576112'
THING_SPEAK_URL = f'https://api.thingspeak.com/channels/{THING_SPEAK_CHANNEL_ID}/feeds.json'

@app.route('/api/data', methods=['GET'])
def get_data():
    params = {
        'api_key': THING_SPEAK_READ_API_KEY,
        'results': 2  # Número de resultados que você deseja buscar
    }
    response = requests.get(THING_SPEAK_URL, params=params)
    data = response.json()
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)
