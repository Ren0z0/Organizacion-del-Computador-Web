from flask import Flask, render_template, url_for, redirect, request

app = Flask(__name__)

@app.route("/")
def Home():
    lista = ["Home", "Docentes", "Calendario", "Informacion"]
    return render_template("home.html", lista=lista)

@app.route("/")
def Docentes():
    return render_template("home.html")

@app.route("/")
def Calendario():
    return render_template("home.html")

@app.route("/")
def Informacion():
    return render_template("home.html")


if __name__ == "__main__":
    app.run(host="127.0.0.1",port=5001,debug=True)