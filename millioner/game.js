'use strict';

let userAnswer;
let goal = 0;
let money = 0;

alert('Добро пожаловать в игру "Кто хочет стать миллионером"');

for (let attempt = 0; attempt < questions.length; attempt++) {
    userAnswer = +prompt("Вопрос № " + (attempt + 1) + "\n" + questions[attempt].q + "\nВарианты ответов:\n"
        + questions[attempt].a1 + "\n" + questions[attempt].a2 + "\n" + questions[attempt].a3 + "\n" + questions[attempt].a4 +
        "\nВведите вариант ответа.\nДля выхода нажмите 0");
    if (userAnswer == 0) {
        alert("Очень жаль. Будем ждать Вас в следующей игре");
        break;
    }
    else if (userAnswer == questions[attempt].correct) {
        alert("Поздравляем! Вы выбрали правильный вариант ответа. За этот вопрос Вы получили " + ((attempt + 1) * 1000) + " рублей");
        money += (attempt + 1) * 1000;
        goal++;
    }
    else {
        alert("К сожалению Вы ответили неверно.\nПравильный вариант ответа: " + questions[attempt].correct);
        break;
    }
}
alert("Вы ответили на " + goal + " из " + questions.length + " вопросов и заработали за игру " + money + " рублей.");