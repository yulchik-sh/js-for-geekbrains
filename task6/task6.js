"use strict";

/**
 * Функция возвращает предпоследнее число в указанной сумме
 * @param {number} number - введенное пользователем число
 * @returns {number|null}
 */
function getBeforeLastNumber(number) {
    number = String(number);
    let digit = number.charAt(number.length - 2);
    if (digit !== "") {
        return Number(digit);
    }
    return null;
}

/**
 * Функция передает падеж слова "рубль" для указанного пользователем числа
 * @param {number} number - введенное пользователем значение
 * @returns {string} правильный падеж слова "рубль"
 */
function getCase(number) {
    let beforeLastNumber = getBeforeLastNumber(number);
    if (beforeLastNumber == 1) {
        return "рублей";
    }
    number = String(number);
    let lastNumber = number.charAt(number.length - 1);
    lastNumber = Number(lastNumber);
    switch (lastNumber) {
        case 1:
            return "рубль";
        case 2:
        case 3:
        case 4:
            return "рубля";
        case 0:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
            return "рублей";

    }
}

let deposit = +prompt("Введите сумму денег, которую хотите положить на счет");
if (deposit == 0) {
    alert("Вы не указали сумму для зачисления");
}
else {
    alert("Ваша сумма в " + deposit + " " + getCase(deposit) + " успешно зачислена.");
}