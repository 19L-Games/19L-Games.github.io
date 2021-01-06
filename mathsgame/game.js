//Created by 19L Games
const canvas = document.getElementById("c");
const c = canvas.getContext("2d");

const scratch = document.getElementById("scratch");
const bd = document.getElementById("bd");
const variable = document.getElementById("var");

var question = {};
var answer = "";

var correct = incorrect = 0;

function generate() {
    var q1 = Math.floor(12 * Math.random());
    var q2 = Math.floor(12 * Math.random())
    question.q = q1 + "*" + q2;
    question.answer = q1 * q2;
}

window.onload = () => {

    window.addEventListener("keydown", key);
    generate();
    window.setInterval(loop, 1000 / 30);
}

function check() {

    if (answer == question.answer) {
        console.log("Correct");
        correct += 1;
    } else {
        console.log("Incorrect");
        incorrect += 1;
    }
    answer = "";
    generate();
}

function key(e) {
    if (e.key == "1") {
        answer += "1";
    }
    if (e.key == "2") {
        answer += "2";
    }
    if (e.key == "3") {
        answer += "3";
    }
    if (e.key == "4") {
        answer += "4";
    }
    if (e.key == "5") {
        answer += "5";
    }
    if (e.key == "6") {
        answer += "6";
    }
    if (e.key == "7") {
        answer += "7";
    }
    if (e.key == "8") {
        answer += "8";
    }
    if (e.key == "9") {
        answer += "9";
    }
    if (e.key == "0") {
        answer += "0";
    }
    if (e.code == "Enter") {
        check();
    }
}

function loop() {
    c.drawImage(bd, 0, 0);
    c.drawImage(variable, 369, 23);
    c.drawImage(variable, 424, 23);
    c.font = "18px arial";
    c.fillStyle = "#ffffff";
    c.fillText(incorrect, 385, 47, 30);
    c.fillText(correct, 440, 47, 30);
    c.font = "25px arial";
    c.fillStyle = "#000000";
    c.fillText(question.q, 100, 50, 260);
    c.font = "50px arial";
    c.fillText(answer, 95, 100, 260);
}