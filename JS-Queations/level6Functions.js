// Level 6: Functions

// 1. Write a function greet(name) that prints "Hello, name!".
// 2. Write a function to calculate the square of a number.
// 3. Write a function to check if a number is prime.
// 4. Write a function that takes an array and returns the sum of its elements.
// 5. Write a function that takes a string and returns it reversed.

// // 1. Write a function greet(name) that prints "Hello, name!".
// function greet(name) {
//   console.log(`Hello ${name}!`);
// }
// greet("Sapnendra");

// // 2. Write a function to calculate the square of a number.
// const square = (num) => {
//   return num ** 2;
// };
// let sq = square(4);
// console.log(sq);

// // 3. Write a function to check if a number is prime.
// const checkPrime = (num) => {
//   let flag = false;
//   if (num <= 2 && num >= -3) return `${num} is a prime number.`;
//   for (let i = 2; i < num; i++) {
//     if (num % i === 0) flag = true;
//   }
//   if (flag) {
//     return `${num} is not a prime number.`;
//   }
//   return `${num} is a prime number.`;
// };

// for (let i = -3; i < 20; i++) {
//   console.log(checkPrime(i));
// }

// // 4. Write a function that takes an array and returns the sum of its elements.
// const getSum = (arr) => {
//     let sum = 0;
//     arr.forEach((item, idx) => {
//         sum += item;
//     });
//     return sum;
// }
// let arr = [10, 20, 30, 40, 50];
// let sum = getSum(arr);
// console.log("Sum is: ", sum);

// // 5. Write a function that takes a string and returns it reversed.
// const revStr = (str) => {
//   return str.split("").reverse().join("");
// };
// console.log(revStr("Sapnendra Jaiswal"));
