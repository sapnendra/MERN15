const h5 = document.querySelector("h5");
const h3 = document.querySelector("h3");
const btn = document.querySelector("button");
const inner = document.querySelector(".inner");
const outer = document.querySelector(".outer")

btn.addEventListener("click", () => {
  btn.disabled = true;
  let sec = 3;
  h3.textContent = `Download starts in ...${sec}`;
  let secInter = setInterval(() => {
    sec--;
    h3.textContent = `Download starts in ...${sec}`;
  }, 1000);
  setTimeout(() => {
    clearInterval(secInter);
    let grow = 0;
    let inter = setInterval(() => {
      grow++;
      h3.textContent = "Downloading... " + grow + "%";
      h3.style.color = "rgb(255, 166, 0)";
      inner.style.width = `${grow}%`;
    }, 50);

    setTimeout(() => {
      btn.disabled = false;
      h3.textContent = "Download Completed";
      h3.style.color = "green";
      inner.style.width = `0%`;
      outer.style.display = "none"
      clearInterval(inter);
    }, 5000);
  }, 3000);
});
