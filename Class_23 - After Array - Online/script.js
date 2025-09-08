// str.split()
// arr.reverse();
// str.join();

// var str = "Hello I am sapnendra";
// var spl = str.split("");
// var result = spl.reverse().join("");
// console.log(result);

var str = "naman";

var palindrome = str.split("").reverse().join("");
if(palindrome === str) {
  console.log("Hurrey...!, You won the lottery.");
} else {
  console.log("Better luck for next time..!");
}
