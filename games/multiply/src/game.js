//Created by 19L Games
const canvas = document.getElementById("c");
const c = canvas.getContext("2d");

const scratch = document.getElementById("scratch");
const bd = document.getElementById("bd");
const variable = document.getElementById("var");

var question = {};
var answer = "";
var time = 4;
var correct = incorrect = 0;
var loopInterval = window.setInterval(loop, 1000 / 30);
var timerInterval = window.setInterval(countdown, 1000);

function generate() {
    var q1 = Math.floor(12 * Math.random());
    var q2 = Math.floor(12 * Math.random())
    question.q = q1 + "*" + q2;
    question.answer = q1 * q2;
    time = 4;
}

window.onload = () => {

    window.addEventListener("keydown", key);
    window.addEventListener("click", onclick);
    generate();

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
    c.fillText(time, 10, 40);
    if (incorrect == 3) {
        window.clearInterval(loopInterval);
        c.fillStyle = "#ffffff";
        c.fillRect(0, 0, 480, 360);
        c.fillStyle = "#ff0000";
        c.fillText("Game Over!", 100, 100);
        c.fillText("Your Score: " + correct, 100, 150);
    }
    if (correct == 10) {
        window.clearInterval(loopInterval);
        c.fillStyle = "#ffffff";
        c.fillRect(0, 0, 480, 360);
        c.fillStyle = "#00ff00";
        c.fillText("You win!", 120, 100);

    }
}

function countdown() {
    time -= 1;
    if (time == 0) {
        incorrect += 1;
        generate();
        time = 4;
    }
}

function onclick(e) {
    if (e.pageX >= 167 && e.pageX < 223) {
        if (e.pageY >= 311 && e.pageY < 368) {
            answer += "1";
        }
    }
    if (e.pageX >= 225 && e.pageX < 282) {
        if (e.pageY >= 311 && e.pageY < 368) {
            answer += "2";
        }
    }
    if (e.pageX >= 286 && e.pageX < 344) {
        if (e.pageY >= 311 && e.pageY < 368) {
            answer += "3";
        }
    }
    if (e.pageX >= 167 && e.pageX < 223) {
        if (e.pageY >= 373 && e.pageY < 428) {
            answer += "4";
        }
    }
    if (e.pageX >= 225 && e.pageX < 282) {
        if (e.pageY >= 373 && e.pageY < 428) {
            answer += "5";
        }
    }
    if (e.pageX >= 286 && e.pageX < 344) {
        if (e.pageY >= 373 && e.pageY < 428) {
            answer += "6";
        }
    }
    if (e.pageX >= 167 && e.pageX < 223) {
        if (e.pageY >= 432 && e.pageY < 490) {
            answer += "7";
        }
    }
    if (e.pageX >= 225 && e.pageX < 282) {
        if (e.pageY >= 432 && e.pageY < 490) {
            answer += "8";
        }
    }
    if (e.pageX >= 286 && e.pageX < 344) {
        if (e.pageY >= 432 && e.pageY < 490) {
            answer += "9";
        }
    }
    if (e.pageX >= 167 && e.pageX < 223) {
        if (e.pageY >= 492 && e.pageY < 550) {
            answer += "0";
        }
    }
    if (e.pageX >= 225 && e.pageX < 344) {
        if (e.pageY >= 492 && e.pageY < 550) {
            check();
        }
    }
}