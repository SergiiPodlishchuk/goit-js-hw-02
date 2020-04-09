const findLongestWord = function(string) {
  // console.log(string);
  const stringArray = string.split(" ");
  // console.log(stringArray);
  let longestWord = stringArray[0];

  for (let i = 0; i < stringArray.length; i += 1) {
    const word = stringArray[i];
    // console.log(word);
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  return longestWord;
};

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
console.log(findLongestWord("Google do a roll"));
console.log(findLongestWord("May the forse be with you"));
