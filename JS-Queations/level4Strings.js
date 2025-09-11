// Level 4: Strings

// 1. Take a string and print its length.
// 2. Reverse a string without using built-in functions.
// 3. Count the number of vowels in a string.
// 4. Check if a given string is a palindrome (same forwards and backwards).
// 5. Replace all spaces in a sentence with -.

// // 1. Take a string and print its length.
// let str = "Sapnendra";
// console.log(str.length);

// // 2. Reverse a string without using built-in functions.
// let str = "Sapnendra";
// let reverse = "";
// for(let i=str.length-1; i>=0; i--) {
//     reverse += str[i];
// }
// console.log(`Reverse of "${str}" is: ${reverse}`);

// // 3. Count the number of vowels in a string.
// let original = "Sapnendra";
// let str = original.toLowerCase();
// let count = 0;
// for (let i = 0; i < str.length; i++) {
//   if (
//     str[i] === "a" ||
//     str[i] === "e" ||
//     str[i] === "i" ||
//     str[i] === "o" ||
//     str[i] === "u"
//   ) {
//     count++;
//   }
// }
// console.log(`Vowels count in "${original}" string is: ${count}`);

// // 4. Check if a given string is a palindrome (same forwards and backwards).
// let original = "Sapnendra";
// let str = original.toLowerCase();
// let reverse = str.split("").reverse().join("");
// if (str === reverse) {
//   console.log(`"${str}" is a palindromic string.`);
// } else {
//   console.log(`"${str}" is not a palindromic string.`);
// }

// // 5. Replace all spaces in a sentence with -.
// let str = "hello my name is Sapnendra Jaiswal";
// let dashSeperated = str.split(" ").join("-");
// console.log(dashSeperated);
