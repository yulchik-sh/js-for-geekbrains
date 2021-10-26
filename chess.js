'use strict';

let boardText =
    [
        [' ', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', ' '],
        ['8', '&#9820;', '&#9822;', '&#9821;', '&#9819;', '&#9818;', '&#9821;', '&#9822;', '&#9820;', '8'],
        ['7', '&#9823;', '&#9823;', '&#9823;', '&#9823;', '&#9823;', '&#9823;', '&#9823;', '&#9823;', '7'],
        ['6', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '6'],
        ['5', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '5'],
        ['4', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '4'],
        ['3', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '3'],
        ['2', '&#9817;', '&#9817;', '&#9817;', '&#9817;', '&#9817;', '&#9817;', '&#9817;', '&#9817;', '2'],
        ['1', '&#9814;', '&#9816;', '&#9815;', '&#9813;', '&#9812;', '&#9815;', '&#9816;', '&#9814;', '1'],
        [' ', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', ' ']
    ];
// функция создает шахматное поле, в ячейках которого указываются буквы или пустые значения
function gameField() {
    //создаем таблицу
    let table = document.createElement("table");
    // через цикл создаем 10 строк
    for (let i = 0; i < 10; i++) {
        let tr = document.createElement("tr");
        table.append(tr);

        //через цикл создаем 10 ячеек в строке
        for (let j = 0; j < 10; j++) {
            let td = document.createElement("td");
            //проверяем ячейки и переворачиваем текст в верхней части и справа
            if (i == 0 || j == 0 || i == 9 || j == 9) {
                if (j == 9 || i == 0) {
                    td.className += "rotate";
                }
            }
            // остальные ячейки закрашиваем в черный или белый цвет
            else {
                td.className = (i + j) % 2 == 0 ? "white-td " : "black-td ";
                if (i == 1 || i == 2) {
                    td.className += "black_text";
                }
                else if (i == 7 || i == 8) {
                    td.className += "white_text";
                }
            }
            //вставляем в ячейки данные из массива
            td.innerHTML = boardText[i][j];
            tr.append(td);
        }
    }
    document.body.append(table);
}
gameField();
