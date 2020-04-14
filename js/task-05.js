"use strict";

console.log("<------task-05------>");

const checkForSpam = function (message) {
  const messageWord = message.toLowerCase();

  if (messageWord.includes("spam") || messageWord.includes("sale")) {
    return true;
  } else {
    return false;
  }
};

console.log(checkForSpam("Latest technology news"));
console.log(checkForSpam("JavaScript weekly newsletter")); // false
console.log(checkForSpam("Get best sale offers now!")); // true
console.log(checkForSpam("[SPAM] How to earn fast money?")); // true
