// var arr = [10, 20, 30, 40, 50];
// var arr2 = [];

// arr.forEach((elem) => {
//     arr2.push(elem*2);
// });
// console.log(arr2);

// var sum = 0;
// arr.forEach((elem) => {
//     if(elem%2 === 0) {
//         sum += elem;
//     }
// });
// console.log(sum);

// var sum2 = 0;
// arr.forEach((elem) => {
//     sum2 += elem;
// });
// console.log(sum2);

// var arr = [
//   "html",
//   "css",
//   "js",
//   "react",
//   "js",
//   "nodejs",
//   "expressjs",
//   "mongodb",
// ];
// var str = "js";

// for (var i = 0; i < arr.length; i++) {
//   if (arr[i] === str) {
//     console.log("First value present at index: ", i);
//     break;
//   }
// }

// var arr = [
//   "harsh",
//   "sarthak",
//   "sapnendra",
//   "devank",
//   "chanchal",
//   "vipul",
// ];
// var str = prompt("Enter your name...").toLowerCase();

// for (var i = 0; i < arr.length; i++) {
//   if (arr[i] === str) {
//     console.log("Your name is present at index: ", i);
//     break;
//   }
// }

var arr = [89, 78, 33, 75, 86, 87];

arr.forEach(element => {
    if(element == 78) {
        console.log("Present");
        // break;
    }
});

// var mark = Number(prompt("Enter your mark..."));
// var flag = true;
// for (var i = 0; i < arr.length; i++) {
//   if(mark < arr[i]) {
//     flag = false;
//   }
// }
// if(flag) {
//     console.log("You are the real topper.");
// } else {
//     console.log("You are not the real topper.");
// }