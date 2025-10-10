// Make a typing speed test application. When the page loads, randomly show one sentence from an array of sentences. Start a timer when the user starts typing inside the input box. When they finish typing (same text as displayed), stop the timer and show how many seconds it took. Add a “Try Again” button that resets everything and shows a new random sentence. You must handle all these actions with pure DOM manipulation and JavaScript timers.

let arr = [
  "This is a sentance",
  "This is another sentance",
  "My name is Sapnendra",
  "Hello World",
];

const h1 = document.querySelector(".sentance");
const inp = document.querySelector("#inp");
const span = document.querySelector("#time");

const random = Math.floor(Math.random() * arr.length);
const sentance = arr[random];
h1.textContent = sentance;
let inter;
let timer = 0;
function startTimer() {
  inter = setInterval(() => {
    timer++;
    span.textContent = timer + " seconds";
  }, 1000);
}

let flag = true;
inp.addEventListener("keydown", () => {
  if (flag) {
    startTimer();
    flag = false;
  }
});

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let userInp = inp.value;

  console.log("Hello");
  if (userInp === sentance) {
    clearInterval(inter);
    span.textContent = `You have taken ${timer} second.`;
    span.style.color = "green";
  } else {
    timer = 0;
    span.textContent = "Try again...";
    span.style.color = "red";
  }

  form.reset();
});
