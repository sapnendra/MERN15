// Level 2: Operators & Conditions

// 1. Write a program that takes an age and checks if the person is eligible to vote (18+).
// 2. Given two numbers, print the larger one.
// 3. Write a program that checks if a number is even or odd.
// 4. You are given marks of a student. Print the grade according to rules:
//      - 90+ = A
//      - 75–89 = B
//      - 50–74 = C
//      - Below 50 = Fail
// 5. Create a simple calculator using variables a, b, and an operator (+, -, \*, /).

// // 1. Write a program that takes an age and checks if the person is eligible to vote (18+).
// var age = Number(prompt("How old are you?"));
// if (age > 18) {
//   console.log("You are elegible to vote.");
// } else {
//   console.log("you are noto elegible to vote.");
// }

// // 2. Given two numbers, print the larger one.
// var num1 = Number(prompt("Enter first number: "));
// var num2 = Number(prompt("Enter second number: "));
// if (num1 > num2) {
//   console.log(`${num1} is larger than ${num2}`);
// } else {
//   console.log(`${num2} is larger than ${num1}`);
// }

// // 3. Write a program that checks if a number is even or odd.
// var num = 34;
// if(num%2===0) {
//     console.log(`${num} is an even number.`)
// } else {
//     console.log(`${num} is an odd number.`)
// }

// // 4. You are given marks of a student. Print the grade according to rules:- 90+ = A, -> 75–89 = B  -> 50–74 = C -> Below 50 = Fail
// var avgMark = 76;
// if (avgMark > 90) {
//   console.log("Grade: A+");
// } else if (num > 75 && num < 90) {
//   console.log("Grade: B");
// } else if (num > 50 && num < 75) {
//   console.log("Grade: C");
// } else {
//   console.log("You are fail in this exam, better luck for next time.");
// }

// // 5. Create a simple calculator using variables a, b, and an operator (+, -, \*, /).
// var num1 = 34;
// var num2 = 2;
// var ope = "-";

// switch (ope) {
//   case "+":
//     console.log(`${num1}, ${num2} - the Sum is:", ${num1 + num2}`);
//     break;
//   case "-":
//     console.log(`${num1}, ${num2} - the subtraction is:", ${num1 - num2}`);
//     break;
//   case "*":
//     console.log(`${num1}, ${num2} - the multiplication is:", ${num1 * num2}`);
//     break;
//   case "/":
//     console.log(`${num1}, ${num2} - the divide is:", ${num1 / num2}`);
//     break;
//   case "%":
//     console.log(`${num1}, ${num2} - the Sum is:", ${num1 % num2}`);
//     break;

//   default:
//     console.log("Invalid Operator!, Enter valid operator...!");
//     break;
// }