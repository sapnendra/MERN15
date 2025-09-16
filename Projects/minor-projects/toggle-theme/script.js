const darkBtn = document.querySelector("button.dark");
const lightBtn = document.querySelector("button.light");
const main = document.querySelector("main");
const h2 = document.querySelectorAll("h2");
const p = document.querySelectorAll("p");
const htmlCard = document.querySelector("#html-blog");
const cssCard = document.querySelector("#css-blog");
const jsCard = document.querySelector("#javascript-blog");

darkBtn.addEventListener("click", () => {
  document.body.style.backgroundColor = "#222";
  lightBtn.style.backgroundColor = "#bebebeff";
  lightBtn.style.color = "#000";
  htmlCard.style.backgroundColor = "#333";
  cssCard.style.backgroundColor = "#333";
  jsCard.style.backgroundColor = "#333";
  h2.forEach((element) => {
    element.style.color = "#fff";
  });
  p.forEach((element) => {
    element.style.color = "#fff";
  });
});

lightBtn.addEventListener("click", () => {
  document.body.style.backgroundColor = "";
  htmlCard.style.backgroundColor = "#fff";
  cssCard.style.backgroundColor = "#fff";
  jsCard.style.backgroundColor = "#fff";
  h2.forEach((element) => {
    element.style.color = "#000";
  });
  p.forEach((element) => {
    element.style.color = "#000";
  });
  lightBtn.style.backgroundColor = "";
  lightBtn.style.color = "";
});
