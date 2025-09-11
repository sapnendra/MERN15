// Level 5: Arrays

// 1. Create an array of 5 numbers and print each number using a loop.
// 2. Find the maximum number in an array.
// 3. Find the minimum number in an array.
// 4. Calculate the sum of all numbers in an array.
// 5. Count how many times a number appears in an array.
// 6. Reverse an array manually (without reverse()).

// // 1. Create an array of 5 numbers and print each number using a loop.
// let arr = [23, 43, 56, 67, 434];
// arr.forEach((item, idx) => {
//   console.log(idx, item);
// });

// // 2. Find the maximum number in an array.
// let arr = [34, 21, 23, 67, 121, 45, 23];
// let maxNum = arr[0];
// let index = -1;
// arr.forEach((item, idx) => {
//   if (item > maxNum) {
//     maxNum = item;
//     index = idx;
//   }
// });
// console.log(
//   `Largest element present at index: ${index}, and the value is: ${maxNum}`
// );

// // 3. Find the minimum number in an array.
// let arr = [34, 21, 23, 67, 121, 45, 23];
// let minNum = arr[0];
// let index = -1;
// arr.forEach((item, idx) => {
//   if (item < minNum) {
//     minNum = item;
//     index = idx;
//   }
// });
// console.log(
//   `Largest element present at index: ${index}, and the value is: ${minNum}`
// );

// // 4. Calculate the sum of all numbers in an array.
// let arr = [34, 21, 23, 67, 121, 45, 23];
// let sum = 0;
// arr.forEach((item, idx) => {
//     sum += item;
// });
// console.log(`Sum of element [${arr}] is: ${sum}`);

// // 5. Count how many times a number appears in an array.
// let arr = [34, 21, 21, 67, 121, 21, 23];
// let num = 21;
// let count = 0;
// arr.forEach((item, idx) => {
//     if(num === item) count++;
// });
// console.log(`Number ${num} appeared ${count} times.`);

// // 6. Reverse an array manually (without reverse()).
// // // Method:1
// // let arr = [12, 23, 34, 45, 56];
// // let reverse = [];
// // arr.reverse().forEach((item, idx) => {
// //     reverse.push(item)
// // });
// // arr = reverse;
// // console.log(arr);
// // Method:2
// const swap = (arr, s, l) => {
//     let temp = arr[s];
//     arr[s] = arr[l];
//     arr[l] = temp;
//     return;
// }
// let arr = [12, 23, 34, 45, 56, 67];
// let s = 0, l = arr.length-1;
// while(s < l) {
//     swap(arr, s, l);
//     s++;
//     l--;
// }
// console.log(arr);