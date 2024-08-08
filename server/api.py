from flask import Flask
from flask_cors import CORS
import time
import random

app = Flask(__name__)
cors = CORS(app, origins="*")

@app.route('/api/', methods=['GET'])
def get_api():
    return '0.0.1'

@app.route('/api/health', methods=['GET'])
def get_health():
    return 'OK'

@app.route('/api/welcome', methods=['GET'])
def get_welcome():
    return random.choice([
        "Welcome!",
        "Hello and welcome!",
        "Greetings and welcome!",
        "Welcome, friend!",
        "Welcome aboard!",
        "Welcome to the community!",
        "Welcome to our platform!",
        "Welcome to the party!"
    ])


@app.route('/api/time', methods=['GET'])
def get_current_time():
    return str(time.time())

@app.route('/api/roles', methods=['GET'])
def get_roles():
    return ['owner', 'superAdmin', 'admin', 'user']


if __name__ == '__main__':
    app.run(debug=True, port=8000)