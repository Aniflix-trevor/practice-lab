// function calculatePrice(price, discountPercentage, taxPercentage) {
//   if (discountPercentage <= 0 || taxPercentage <= 0) {
//      return "The discount and tax is not valid as it is equal to or less than 0";
// } else {
//     let discount = price * (discountPercentage / 100);
//     let discountedPrice = price - discount;
//     let tax = discountedPrice * (taxPercentage / 100);
//     let finalPrice = discountedPrice + tax;
//     return finalPrice;
// }

// console.log(calculatePrice(100, 10, 5));
// console.log(calculatePrice(100, 0, 5));
// console.log(calculatePrice(100, 10, 0));

console.log(calculatePrice(100, 10, 5));
console.log(calculatePrice(100, 0, 5));
console.log(calculatePrice(100, 10, 0));

const calculatePrice = (price, discountPercentage, taxPercentage) => {
  if (discountPercentage === 0 && taxPercentage === 0) {
    return price;
  } else if (discountPercentage === 0) {
    let tax = price * (taxPercentage / 100);
    return price + tax;
  } else if (taxPercentage === 0) {
    let discount = price * (discountPercentage / 100);
    return price - discount;
  } else {
    let discountedPrice = price - price * (discountPercentage / 100);
    let taxedPrice = discountedPrice + discountedPrice * (taxPercentage / 100);
    return taxedPrice;
  }
};

// function calculatePrice(price, discountPercentage, taxPercentage) {
//      if (discountPercentage === 0 && taxPercentage === 0) {
//        return price;
//      } else if (discountPercentage === 0) {
//        let tax = price * (taxPercentage / 100);
//        return price + tax;
//      } else if (taxPercentage === 0) {
//        let discount = price * (discountPercentage / 100);
//        return price - discount;
//      } else {
//        let discountedPrice = price - price * (discountPercentage / 100);
//        let taxedPrice =
//          discountedPrice + discountedPrice * (taxPercentage / 100);
//        return taxedPrice;
//      }
// }

console.log(calculatePrice(100, 10, 5));
console.log(calculatePrice(100, 0, 5));
console.log(calculatePrice(100, 10, 0));

function printMessage(message) {
  let myMessage = message;
  console.log(myMessage);
}

printMessage("Hello, World!");

// function printMessage(message) {
//   let uMessage = message;
//   console.log(uMessage);
// }

const printMessage = (message) => {
  console.log(message);
};
// printMessage("Evening is the best time of the day");

// function sendMessage(message, callBack) {
//   let myMessage = message;
//   callBack(myMessage);
// }

const sendMessage = (message, callBack) => {
  callBack(message);
};

sendMessage("Evening is the best time of the day", printMessage);
