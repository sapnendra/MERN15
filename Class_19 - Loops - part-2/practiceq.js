// // Ask the user for a number and print all numbers down to 1 in descending order. If the number is negative, print "Invalid input".
// var num = 30;
// if (num < 0) {
//   console.log("Invalid Input");
// } else {
//   while (num > 0) {
//     console.log(num);
//     num--;
//   }
// }


// // Ask the user for a number. If it's even, print all even numbers up to that number. If it's odd, display "Bye" once and exit.
// var num = 23;
// if(num%2 == 0) {
//     var a = 1;
//     while(a <= num) {
//         if(a%2 == 0) {
//             console.log(a);
//         }
//         a++;
//     }
// } else {
//     console.log("Bye");
// }


// // Ask the user for an email and password. If they enter "admin@mail.com" and "1234", show a success message. Otherwise, allow up to 3 attempts before showing "Access Denied".
// var adminEmail = "admin@mail.com";
// var adminPass = 1234;
// var userEmail = prompt("Enter your email: ");
// var userPass = Number(prompt("Enter your password: "));
// if(userEmail == adminEmail && userPass == adminPass) {
//     console.log("Authenticated Successfullly");
// } else {
//     var a = 3;
//     while(a > 0){
//         console.log(`Wrong email/prassword, you have ${a} more chances.`)
//         userEmail = prompt("Enter your email: ");
//         userPass = Number(prompt("Enter your password"));
//         if(userEmail == adminEmail && userPass == adminPass) {
//             console.log("Authenticated Successfullly");
//             break;
//         }
//         a--;
//     }
//     if(a == 0) {
//         console.log("Access Denied");
//     }
// }


// // Ask the user for a number and print numbers up to that number. If a number is a multiple of 3, print "Sheryians", if a multiple of 5, print "Coding", and if both, print "Sheryians Coding School".
// var num = Number(prompt("Enter a number: "));
// var a = 1;
// while (a <= num) {
//   if (a % 3 == 0 && a % 5 == 0) {
//     console.log("Sheryians Coding School");
//   } else if (a % 3 == 0) {
//     console.log("Sheryians");
//   } else if (a % 5 == 0) {
//     console.log("Coding");
//   } else {
//     console.log(a);
//   }
//   a++;
// }


// // Ask the user for a number and print all prime numbers up to that number.
// var num = 10;
// for(var i=2; i<=num; i++) {
//     var flag = true;
//     var a = 2;
//     while(a <= i/2) {
//         if(i % a == 0) {
//             flag = false;
//             break;
//         }
//         a++;
//     }
//     if(flag) {
//         console.log(`${i}, is a prime number.`);
//     }
// }


// // Ask the user for a string and print it in reverse (e.g., "hello" → "olleh").
// var str = "hello";
// var revStr = "";
// for(var i = str.length-1; i>=0; i--) {
//     revStr += str[i];
// }
// console.log(revStr);


// // Ask the user for a word and check if it is a palindrome (reads the same forward and backward).
// var str = "kini";
// var revStr = "";
// for(var i=str.length-1; i>=0; i--) {
//     revStr += str[i];
// }
// if(str === revStr) {
//     console.log(str, "- is a palindrome");
// } else {
//     console.log(str, "- is not a palindrome");
// }


// // Ask the user for a number and print the sum of its digits (e.g., 456 → 4+5+6 = 15).
// var x = 456;
// var y = x;
// var sum = 0;
// while(y > 0) {
//     var digit = y % 10;
//     sum += digit;
//     y = Math.floor(y/10);
// }
// console.log(x, "sum of its digit is:", sum);


// // Ask the user for a number and print its factorial (e.g., 5! = 5×4×3×2×1 = 120).
// var a = 5;
// var fact = 1;
// while(a > 0) {
//     fact *= a;
//     a--;
// }
// console.log(fact);


// // Ask the user for a sentence and count how many vowels (a, e, i, o, u) are present.
// var sentence = "Sapnendra is a software engineer";
// var vowelsCount = 0;
// for(var i = 0; i<sentence.length-1; i++) {
//     if(sentence[i] === 'a' || sentence[i] === 'e' ||sentence[i] === 'i' ||sentence[i] === 'o' ||sentence[i] === 'u') {
//         vowelsCount++;
//     }
// }
// console.log(sentence, " : ", vowelsCount, "vowels character.");