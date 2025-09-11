// Level 1: Basics (Console, Variables, Data Types)

// 1. Print "Hello, JavaScript!" in the console.
// 2. Declare a variable name and store your name in it. Print it.
// 3. Create two variables a and b, assign them numbers, and print their sum.
// 4. Store a number in a variable and check its type using typeof.
// 5. Reassign a variable’s value and print both the old and new value.
// 6. Create a constant PI with value 3.14. Try reassigning it. What happens?

// 1. Print "Hello, JavaScript!" in the console.
console.log("Hello JavaScript!");

// 2. Declare a variable name and store your name in it. Print it.
var username = "Sapnendra";
console.log(username);

// 3. Create two variables a and b, assign them numbers, and print their sum.
var num1 = 10;
var num2 = 20;
console.log(`Sum of ${num1} and ${num2} is : {num1+num2}`);

// 4. Store a number in a variable and check its type using typeof.
var num3 = 12312;
console.log(typeof num3);

// 5. Reassign a variable’s value and print both the old and new value.
var a = 34;
console.log(a);
a = 999;
console.log(a);

// 6. Create a constant PI with value 3.14. Try reassigning it. What happens?
const PI = 3.14;
PI = 3.14254;       // TypeError: Assignment to constant variable.
console.log(PI);


