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

