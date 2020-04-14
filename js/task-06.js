"use strict";

console.log("<------task-06------>");

let input;
const numbers = [];
let total = 0;

// input = prompt("Введите число");

// const inputIsNumber = Number.isNaN(Number(input));
// console.log(input);
// console.log(inputIsNumber);

// if (inputIsNumber) {
//   console.log("Было введено не число попробуйте еще раз");
// } else {
//   if (input === null) {
//     console.log("Отменено пользователем");
//   } else {
//     for (let i = 0; input !== null; i += 1) {
//       input = prompt("Введите число");
//       numbers[i] = Number(input);
//       total += Number(input);
//     }
//     console.log(`Общая сумма чисел равна ${total}`);
//   }
// }

for (let i = 0; input !== null; i++) {
  input = prompt("Введите число");
  const inputIsNaN = Number.isNaN(Number(input));

  if (input === null) {
    console.log("Отменено пользователем");
    break;
  } else if (inputIsNaN) {
    console.log("Было введено не число попробуйте еще раз");
    break;
  } else {
    numbers[i] = Number(input);
    total += numbers[i];
  }
  console.log(`Общая сумма чисел равна ${total}`);
}
