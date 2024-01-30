from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/play', methods=['POST'])
def play():
    return jsonify({'status': 'success', 'message': 'Move successful'})

if __name__ == '__main__':
    app.run(debug=True)