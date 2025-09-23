const cursor = document.querySelector("#cursor");
const h1 = document.querySelector("h1");

document.body.addEventListener("mousemove", (e) => {
  cursor.style.display = "block";

  const x = e.x;
  const y = e.y;

  cursor.style.left = `${x - 40}px`;
  cursor.style.top = `${y - 40}px`;
});

h1.addEventListener("mouseenter", () => {
  cursor.style.transform = "scale(2)";

});

h1.addEventListener("mouseleave", () => {
  cursor.style.transform = "scale(1)"
});
