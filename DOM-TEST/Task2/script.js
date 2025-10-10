// Create a div box of size 200×200px. When you hover the mouse over it, change its background color to a random color. When the mouse leaves, return it to the original color.

const box = document.querySelector(".box");

const random = () => {
  return Math.floor(Math.random() * 255);
};

box.addEventListener("mouseenter", () => {
  box.style.backgroundColor = `rgb(${random()}, ${random()}, ${random()})`;
});
box.addEventListener("mouseleave", () => {
  box.style.backgroundColor = "lightseagreen";
});
