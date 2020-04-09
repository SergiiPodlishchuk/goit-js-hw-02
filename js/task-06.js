let input;
const numbers = [];
let total = 0;

if (input !== null || input === "" || input === NaN) {
  for (let i = 0; input !== null; i += 1) {
    input = prompt("Введите число");
    numbers[i] = input;
    total += Number(input);
  }

  console.log(`Общая сумма чисел равна ${total}`);
} else {
  console.log("Было введено не число попробуйте еще раз");
}
