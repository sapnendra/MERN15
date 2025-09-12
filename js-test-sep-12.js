// // Q1. Count Vowels in a String
// // Write a program that counts how many vowels (a, e, i, o, u) are present in a given string.
// // 👉 Example:
// // Input: "javascript"
// // Output: 3
// let str = "Javascript";
// let newStr = str.toLowerCase();
// let count = 0;
// for (let i = 0; i < newStr.length; i++) {
//   if (
//     newStr[i] === "a" ||
//     newStr[i] === "e" ||
//     newStr[i] === "i" ||
//     newStr[i] === "o" ||
//     newStr[i] === "u"
//   ) {
//     count++;
//   }
// }
// console.log(`String ${str} has ${count}`);

// Q2. Find the Largest Number in an Array (use of inbuilt method is not allowed)
// Write a function that takes an array of numbers and returns the largest number.
// 👉 Example:

// // Input: [5, 9, 2, 15, 3]
// // Output: 15
// let arr = [5, 9, 2, 15, 3];
// let max = arr[0];
// for(let i=1; i<arr.length; i++) {
//     if(arr[i] > max) {
//         max = arr[i];
//     }
// }
// console.log(`Max element: ${max}`);

// // Q3. Odd-Even Organizer
// // Write a function that takes an array of numbers and returns an object with two keys:
// // - odd → array of odd numbers
// // - even → array of even numbers
// // 👉 Example Input:

// // let nums = [1, 2, 3, 4, 5, 6];
// // 👉 Expected Output:
// // {
// //   odd: [1, 3, 5],
// //   even: [2, 4, 6]
// // }

// function categoryEvenOdd(arr) {
//   let even = [];
//   let odd = [];
//   arr.forEach((item) => {
//     if (item % 2 === 0) {
//       even.push(item);
//     } else {
//       odd.push(item);
//     }
//   });

//   let obj = {
//     Odd: odd,
//     Even: even,
//   };

//   return obj;
// }

// let arr = [1, 2, 3, 4, 5, 6];
// let ans = categoryEvenOdd(arr);
// console.log(ans);

// Q4. Student Marks Analysis
// You are given an array of student objects in JSON format. Each student has a name and marks.
// Write a function that:

// Prints the names of all students who scored more than 50.
// Returns the average marks of the class.

// 👉 Example Input:

// let students = [
//   { name: "Aman", marks: 70 },
//   { name: "Riya", marks: 45 },
//   { name: "Kabir", marks: 85 }
// ];

// let students = [
//   { name: "Aman", marks: 70 },
//   { name: "Riya", marks: 45 },
//   { name: "Kabir", marks: 85 },
// ];
// let total = 0;
// let stu = [];
// students.forEach((item) => {
//   if (item.marks > 50) {
//     stu.push(item.name);
//   }
//   total += item.marks;
// });
// stu.forEach((item) => {
//   console.log(item);
// });
// console.log("Average: ", total / students.length);