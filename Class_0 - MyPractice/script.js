const box = document.querySelector(".box");
const on = document.querySelector("#on");
const off = document.querySelector("#off");

on.addEventListener("click", () => {
  document.body.style.backgroundColor = "black";
  box.style.backgroundColor = "yellow";
});
off.addEventListener("click", () => {
  document.body.style.backgroundColor = "white";
  box.style.backgroundColor = "white";
});
