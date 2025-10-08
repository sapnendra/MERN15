const h5 = document.querySelector("h5");
const h3 = document.querySelector("h3");
const inner = document.querySelector(".inner");
const btn = document.querySelector("button");

h5.style.display = "none";

btn.addEventListener("click", () => {
  btn.disabled = true;
  let grow = 0;
  let inter = setInterval(() => {
    grow++;
    h3.textContent = grow + "%";
    inner.style.width = `${grow}%`;
  }, 30);

  setTimeout(() => {
    h5.style.display = "block";
    clearInterval(inter);
  }, 3000);
});
