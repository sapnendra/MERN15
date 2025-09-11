// Level 8: Story-Based / Real-Life Logic

// 1. You have a shop selling apples for ₹20 each. Write a program that takes the number of apples a customer buys and prints the total cost.
// 2. A movie ticket costs ₹150. If age is below 12 or above 60, give a 50% discount. Calculate final price.
// 3. Write a program where a car has fuel = 100. Each km consumes 2 fuel. If you want to travel n km, print if the fuel is enough or not.
// 4. You are building a password checker. A valid password must be at least 8 characters and must contain at least one number. Write a program to check validity.
// 5. Create a simple game: generate a random number between 1–10. Ask user to guess. If they guess correctly, print "You win!", otherwise "Try again".
// 6. You are organizing a cricket match. Store runs scored by 5 players in an array. Print total runs and the highest run scorer.
// 7. A delivery guy has to deliver 10 parcels. If he delivers 1 parcel, he gets ₹50. Write a program to calculate his earnings after delivering n parcels.
// 8. Write a program to simulate a basic ATM. Start with balance = 1000. Ask user if they want to deposit or withdraw, update balance, and print new balance.

// // 1. You have a shop selling apples for ₹20 each. Write a program that takes the number of apples a customer buys and prints the total cost.
// let noOfApples = 12;
// let totalCost = 12 * 20;
// console.log(`The total cost is: ${totalCost}`);

// // 2. A movie ticket costs ₹150. If age is below 12 or above 60, give a 50% discount. Calculate final price.
// let age = 10;
// let ticketCost = 150;
// if(age<12 || age>60) {
//     ticketCost = (ticketCost*50)/100;
// }
// console.log(`Total ticket costs is: ${ticketCost}`);

// // 3. Write a program where a car has fuel = 100. Each km consumes 2 fuel. If you want to travel n km, print if the fuel is enough or not.
// let fuel = 100;
// let nKm = 12;
// let enoughFuel = 2 * nKm;
// if (enoughFuel <= fuel) {
//   console.log("🌟, the fuel is enough for this destination.");
// } else {
//   console.log("⚠️ , the fuel is not enough for this destination.");
// }

// // 4. You are building a password checker. A valid password must be at least 8 characters and must contain at least one number. Write a program to check validity.
// let str = "abcd1223";
// let flag = false;
// let arrStr = str.split("");
// for (let i = 0; i < arrStr.length; i++) {
//   if (arrStr[i].charCodeAt(0) >= 48 && (arrStr[i].charCodeAt(0) <= 57)) {
//     flag = true;
//   }
// }
// if(str.length === 8 && flag) {
//     console.log("Your password is too strong, Go ahead.");
// } else {
//     console.log("Try another password.");
// }

// // 5. Create a simple game: generate a random number between 1–10. Ask user to guess. If they guess correctly, print "You win!", otherwise "Try again".
// let randomNo = Math.floor(Math.random()*10);
// alert("Lets play guess game.")
// let userInput = Number(prompt("Enter a number between 1 to 10"));
// while(randomNo !== userInput) {
//     alert("Oops.!, try Again..")
//     userInput = Number(prompt("Enter a number between 1 to 10"));
// }
// alert("Congrats your guess is correct.")
// console.log("Congrats your guess is correct.")

// // 6. You are organizing a cricket match. Store runs scored by 5 players in an array. Print total runs and the highest run scorer.
// let scores = [67, 87, 34, 56, 32];
// let totalRuns = 0;
// let highestScore = scores[0];
// let idx = -1;
// for (let i = 0; i < scores.length; i++) {
//   totalRuns += scores[i];
//   if (scores[i] > highestScore) {
//     highestScore = scores[i];
//     idx = i + 1;
//   }
// }
// console.log(`Total runs: ${totalRuns}`);
// console.log(`${idx}nth player has highest score, and score is: ${highestScore}`);

// // 7. A delivery guy has to deliver 10 parcels. If he delivers 1 parcel, he gets ₹50. Write a program to calculate his earnings after delivering n parcels.
// const n = 10;
// const ratePerParcel = 50;
// const totalEarnings = n * ratePerParcel;
// console.log(
//   `The delivery guy's earnings after delivering ${n} parcels is ₹${totalEarnings}`
// );


// 8. Write a program to simulate a basic ATM. Start with balance = 1000. Ask user if they want to deposit or withdraw, update balance, and print new balance.
let balance = 1000;
let userChoice = Number(prompt("'Withdraw -> 1' or 'Diposit -> 0'"));
if(userChoice == 1) {
    let amount = Number(prompt(`Current Balance: ${balance}, Enter withdraw amount.?`))
    alert(`Current balance after withdraw: ${balance-amount}.`)
} else {
    let amount = Number(prompt(`Current Balance: ${balance}, Enter diposit amount.?`))
    alert(`Current balance after diposit: ${balance-amount}.`)
}