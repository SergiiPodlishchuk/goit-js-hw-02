"use strict";

console.log("<------task-03------>");

const findLongestWord = function (string) {
  const stringArray = string.split(" ");
  let longestWord = stringArray[0];

  for (let i = 0; i < stringArray.length; i += 1) {
    const word = stringArray[i];
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  return longestWord;
};

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
console.log(findLongestWord("Google do a roll"));
console.log(findLongestWord("May the forse be with you"));
