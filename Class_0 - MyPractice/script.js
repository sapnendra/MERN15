// // sum using accumelator - speard operator
// function sum(...values) {
//   return values.reduce((acc, val) => acc + val, 0);
// }
// console.log(sum(...[2, 4, 5, 6, 2]));

// // IIFE
// (function () {
//   console.log("Hello");
// })();

// function outer() {
//   let count = 0;
//   return function () {
//     count++;
//     console.log(count);
//   };
// }
// let counter = outer();
// counter();
// counter();

// // function that return another function
// function outer() {
//   return function (val) {
//     val++;
//     return val;
//   };
// }
// let num = outer();
// console.log(num(1));

// // pure function
// function addTax(subtotal, taxRate) {
//   return subtotal * (1 + taxRate);
// }

// console.log(addTax(100, 1));

// // discount calc
// function getDiscountOf(total) {
//     return function (dis) {
//         return (total*dis)/100;
//     }
// }
// let dis = getDiscountOf(500)
// console.log(dis(15));

// toUpperCase using HOF
function shout(msg) {
  return msg.toUpperCase();
}

function processMessage(fn) {
  console.log(fn("Hello"));
}
processMessage(shout);
