const formatString = function(string) {
  // console.log(string.length);
  // console.log(string);

  if (string.length >= 40) {
    const stringArray = string.split("");
    // console.log(stringArray);
    stringArray.splice(40, string.length, "...");
    const stringJoin = stringArray.join("");
    console.log(stringJoin);
  } else {
    console.log(string);
  }
};

console.log(formatString("Curabitur ligula sapien, tincidunt non."));
console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."));
console.log(formatString("Curabitur ligula sapien."));
console.log(formatString("Nunc sed turpis. Curabitur a fringilla tristique."));
