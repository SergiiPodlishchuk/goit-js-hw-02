"use strict";

console.log("<------task-04------>");
// мой вариант
// const formatString = function (string) {
//   if (string.length >= 40) {
//     const stringArray = string.split("");
//     stringArray.splice(40, string.length, "...");
//     const stringJoin = stringArray.join("");
//     return stringJoin;
//   } else {
//     return string;
//   }
// };
// вариант геннадия ментора
const formatString = (string, stringMaxLength = 40) =>
  string.length > stringMaxLength
    ? `${string.slice(0, stringMaxLength - 1)}...`
    : string;

console.log(formatString("Curabitur ligula sapien, tincidunt non."));
console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."));
console.log(formatString("Curabitur ligula sapien."));
console.log(formatString("Nunc sed turpis. Curabitur a fringilla tristique."));
