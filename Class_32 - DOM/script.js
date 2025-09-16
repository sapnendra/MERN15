const h1 = document.querySelector("#name span");
const h2 = document.querySelector("#age span");
const h3 = document.querySelector("#color span");
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  h1.innerHTML = "Sapnendra";
  h2.innerHTML = "22";
  h3.innerHTML = "Green";
});
