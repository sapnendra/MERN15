// Level 3: Loops & Iteration

// 1. Print numbers from 1 to 10 using a for lop.
// 2. Print the multiplication table of 5.
// 3. Print the sum of numbers from 1 to 100.
// 4. Print all even numbers between 1 and 50.
// 5. Given a number n, print its factorial using a lop.
// 6. Print Fibonacci series up to n terms.

// // 1. Print numbers from 1 to 10 using a for lop.
// console.log("Number from 1 to 10: ");
// for(let i=1; i<=10; i++) {
//     console.log(i);
// }

// // 2. Print the multiplication table of 5.
// console.log("Multiplication of 5: ");
// for(let i=1; i<=10; i++) {
//     console.log(`5 x ${i} = ${5*i}`);
// }

// // 3. Print the sum of numbers from 1 to 100.
// let sum = 0;
// for(let i=1; i<=100; i++) {
//     sum+=i
// }
// console.log("Sum of 1 to 100:", sum);

// // 4. Print all even numbers between 1 and 50.
// console.log("Even numbers between 1 to 50");
// for(let i=1; i<=50; i++) {
//     if(i%2 === 0) {
//         console.log(`${i} is an even number`);
//     }
// }

// // 5. Given a number n, print its factorial using a lop.
// let num = 6;
// let i = num;
// let fact = 1;
// while (i) {
//   fact *= i;
//   i--;
// }
// console.log(`Factorial of ${num} is: ${fact}`);

// // 6. Print Fibonacci series up to n terms.
// const fibb = (num) => {
//     let a = 0, b = 1;
//     process.stdout.write(a + " ");
//     if(num > 1) process.stdout.write(b + " ");

//     for(let i = 3; i<=num; i++) {
//         let next = a + b;
//         process.stdout.write(next + " ");
//         a = b;
//         b = next;
//     }
//     console.log();
// }
// fibb(5)
