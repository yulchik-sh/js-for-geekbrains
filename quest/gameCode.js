//После игры необходимо спросить номер вопроса. 
//По номеру вопроса нужно вывести текст вопроса и текст выбранного ответа
'use strict';

let answers = [];

//делаем проверку на правильность введенных значений
function isAnswer(q, event) {
    if (isNaN(event) || !isFinite(event)) {
        alert('Вы ввели недопустимый символ');
        return false;
    }
    else if (event < 1 || event > q) {
        alert('Ваше число выходит из допустимого диапазона');
        return false;
    }
    return true;
}

/**
       * Функция answer записывает в массив текст вопроса и вариант ответа пользователя
       * @param {string} question - вопрос в игре
       * @param {number} ans1 - первый вариант ответа
       * @param {number} ans2 - второй вариант ответа
       * @returns {object} массив с текстом вопроса и номером ответа пользователя
*/

function answer(question, ans1, ans2) {
    //Выводим первый вопрос и отправляем на проверку корректности введенного значения в функции isAnswer
    let ok = false;
    let attempt;
    do {
        attempt = +prompt(question + ans1 + ans2 + '-1 - Выход из игры');
        if (attempt == -1) {
            break;
        }
        else {
            ok = isAnswer(works.a0, attempt);
        }
    } while (!ok);
    switch (attempt) {
        case 1: answers.push([question, ans1]);
            break;
        case 2: answers.push([question, ans2]);
            break;
        case -1: answers.push([question, "-1 - что означает выход из игры"]);
            break;
    }
    return attempt;
}

switch (answer(works.a00, works.a1, works.a2)) {
    case 1: // Первое действие  - если в первом окне ввели 1 то открываем серию окон - окно 2
        switch (answer(works.b00, works.b1, works.b2)) {
            case 1: // Второе действие, если во 2 окне ввели 1 то переходим на 4 окно
            case 2: // Второе действие   Если ввели 2 то также переходим на 4 окно
                answer(works.d00, works.d1, works.d2);
                break;
            case -1: // Второе действие
                break;
            default:
                alert('Ошибка');
        }
        break;
    case 2: // Первое действие    Если в 1 окне ввели 2 то переходим к 3 окну
        switch (answer(works.c00, works.c1, works.c2)) {
            case 1: // Второе действие, если во 2 окне ввели 1 то переходим на 4 окно
            case 2: // Второе действие   Если ввели 2 то также переходим на 4 окно
                answer(works.d00, works.d1, works.d2);
                break;
            case -1: // Второе действие
                break;
            default:
                alert('Ошибка');
        }
        break;
    case -1: // Первое действие
        break;
    default:
        alert('Ошибка');
}
alert('Спасибо за игру');

let step = +prompt("Введите номер хода:");
alert("В ходе № " + step + " на предложение:\n " + answers[step - 1][0] + "был дан ответ:\n " + answers[step - 1][1]);



