const h1 = document.querySelector("h1");
const img = document.querySelector("img");

let move = 0;

document.body.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") {
    move += 8;
    img.style.left = `${move}px`;
  } else if (e.key === "ArrowLeft") {
    move -= 8;
    img.style.left = `${move}px`;
  } else if (e.key === "ArrowUp") {
    move -= 8;
    img.style.top = `${move}px`;
  } else if (e.key === "ArrowDown") {
    move += 8;
    img.style.top = `${move}px`;
  }
});
