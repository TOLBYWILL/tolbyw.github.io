import re
from flask import Flask, render_template
app = Flask(__name__)

#render_template("index.html")
@app.route("/")
def index():
    return render_template("home_page.html")

@app.route("/start")
def start():
    return render_template("start.html")

@app.route("/tolby")
def tolby():
    return render_template("tolby.html")

@app.route("/kian")
def kian():
    return render_template("kian.html")
@app.route("/test")
def test():
    return render_template("test.html")

@app.route("/games")
def games():
    return render_template("games.html")

@app.route("/login")
def login():
    return render_template("login_page.html")

if __name__ == '__main__':
    app.run(port=5000, debug=True)