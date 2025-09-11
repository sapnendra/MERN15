// Level 7: Objects

// 1. Create an object student with properties name, age, and marks. Print them.
// 2. Add a method greet() to the student object that prints "Hello, I am name".
// 3. Create an array of student objects (with name and marks) and print the name of the student with the highest marks.
// 4. Create an object representing a bank account with methods deposit() and withdraw().

// // 1. Create an object student with properties name, age, and marks. Print them.
// const obj = {
//   stuName: "Sapnendra",
//   age: 22,
//   marks: 99.99,
// };
// console.log(obj);

// // 2. Add a method greet() to the student object that prints "Hello, I am name".
// const obj = {
//   stuName: "Sapnendra",
//   age: 22,
//   marks: 99.99,
//   greet: (name) => {
//     return `Hello, I am ${name}`;
//   },
// };
// console.log(obj.greet("Sapnendra"));

// 3. Create an array of student objects (with name and marks) and print the name of the student with the highest marks.

// const stuArray = [
//   {
//     stuName: "Sapnendra",
//     marks: 95,
//   },
//   {
//     stuName: "Anjali",
//     marks: 94,
//   },
//   {
//     stuName: "Manti",
//     marks: 98,
//   },
// ];

// let maxMarks = 0;
// let maxMarksName = "";
// stuArray.forEach((item, idx) => {
//   if (item.marks > maxMarks) {
//     maxMarks = item.marks;
//     maxMarksName = item.stuName;
//   }
// });
// console.log(maxMarksName, maxMarks);

// 4. Create an object representing a bank account with methods deposit() and withdraw().
let bankAcc = {
  accNo: 123543,
  ifsc: "UBIN345B5",
  accBal: 1200,
  deposit: (val) => {
    return `Available Amount: ${1200 + val}, Deposit Amount: ${val}`;
  },
  withdraw: (aval, val) => {
    return `Remaining Amount: ${ - val}, Withdraw Amount: ${val}`;
  },
};

let deposit = bankAcc.deposit(600);
console.log(deposit);
let withdraw = bankAcc.withdraw(500);
console.log(withdraw);
