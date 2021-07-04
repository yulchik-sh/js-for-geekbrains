"use script";

// спрашиваем у пользователя любые 2 числа и какую операцию он хочет выполнить
let arg1 = +prompt("Введите первую переменную - любое целое число");
let arg2 = +prompt("Введите вторую переменную - любое целое число");
let operation = prompt("Введите действие, которое вы хотите выполнить - знак + или - или * или /");

/**
 * Функция складывает 2 переданных параметра
 * @param {number} a - первая переменная
 * @param {number} b - вторая переменная
 * @returns {number} сумма переданных параметров
 */
function addition(a, b) {
    return a + b;
}

/**
 * Функция вычитает 2 переданных параметра
 * @param {number} a - первая переменная
 * @param {number} b - вторая переменная
 * @returns {number} разность переданных параметров
 */
function subtraction(a, b) {
    return a - b;
}

/**
 * Функция умножает 2 переданных параметра
 * @param {number} a - первая переменная
 * @param {number} b - вторая переменная
 * @returns {number} произведение переданных параметров
 */
function multiplication(a, b) {
    return a * b;
}

/**
 * Функция делит 2 переданных параметра
 * @param {number} a - первая переменная
 * @param {number} b - вторая переменная
 * @returns {number} частное переданных параметров
 */
function division(a, b) {
    return a / b;
}

/**
 * Функция, в зависимости от выбранной операции, производит действие с двумя переданными числами
 * @param {number} arg1 - первая переменная
 * @param {number} arg2 - вторая переменная
 * @param {string} operation - может быть задана "+", "-", "*", "/"
 * @returns {number} полученный результат
 */
function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case "+":
            return addition(arg1, arg2);
        case "-":
            return subtraction(arg1, arg2);
        case "*":
            return multiplication(arg1, arg2);
        case "/":
            return division(arg1, arg2);
        default:
            //throw new Error("Операция " + operation + " не предусмотрена");
            alert("Операция " + operation + " не предусмотрена");
    }
}

alert("Ваш результат: " + mathOperation(arg1, arg2, operation));