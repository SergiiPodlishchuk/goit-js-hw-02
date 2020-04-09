const calculateEngravingPrice = function(message, pricePerWord) {
  const messageArray = message.split(" ");

  return messageArray.length * pricePerWord;
};
console.log(
  calculateEngravingPrice(
    "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    10
  )
);
// console.log(
//   calculateEngravingPrice(
//     "Lorem ipsum dolor sit amet consectetur adipisicing elit",
//     20
//   )
// );
// console.log(
//   calculateEngravingPrice(
//     "Lorem ipsum dolor sit amet consectetur",
//     40
//   )
// );
// console.log(
//   calculateEngravingPrice(
//     "Lorem ipsum dolor sit amet consectetur",
//     20
//   )
// );
