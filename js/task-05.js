const checkForSpam = function(message) {
  const messageWord = message.toLowerCase();

  if (messageWord.includes("spam") || messageWord.includes("sale")) {
    console.log(true);
  } else {
    console.log(false);
  }
};

console.log(checkForSpam("Latest technology news"));
console.log(checkForSpam("JavaScript weekly newsletter")); // false
console.log(checkForSpam("Get best sale offers now!")); // true
console.log(checkForSpam("[SPAM] How to earn fast money?")); // true
