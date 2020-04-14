"use strict";

console.log("<------task-04------>");

const formatString = function (string) {
  if (string.length >= 40) {
    const stringArray = string.split("");
    stringArray.splice(40, string.length, "...");
    const stringJoin = stringArray.join("");
    return stringJoin;
  } else {
    return string;
  }
};

console.log(formatString("Curabitur ligula sapien, tincidunt non."));
console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."));
console.log(formatString("Curabitur ligula sapien."));
console.log(formatString("Nunc sed turpis. Curabitur a fringilla tristique."));
