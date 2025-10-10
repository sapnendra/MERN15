// Make three buttons — Red, Green, and Blue. When each is clicked, the background color of the page should change to that button’s color.


const container = document.querySelector(".container");
const red = document.querySelector("#red");
const green = document.querySelector("#green");
const blue = document.querySelector("#blue");

red.addEventListener("click", () => {
  container.style.backgroundColor = "red";
  red.style.backgroundColor = "red";
});
green.addEventListener("click", () => {
  container.style.backgroundColor = "green";
  green.style.backgroundColor = "green";
});
blue.addEventListener("click", () => {
  container.style.backgroundColor = "blue";
  blue.style.backgroundColor = "blue";
});
