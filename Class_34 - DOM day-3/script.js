const h1 = document.querySelector("h1");
const span = document.querySelector("span");
const button = document.querySelector("button");

const getRandom = (min, max) => {
  const ran = Math.floor(Math.random() * (max - min + 1) + min);
  return ran;
};

const getRGB = () => {
  const red = getRandom(1, 255);
  const green = getRandom(1, 255);
  const blue = getRandom(1, 255);
  const bgColor = `rgb(${red}, ${green}, ${blue})`;

  return bgColor;
};

button.addEventListener("click", () => {
  document.body.style.backgroundColor = getRGB();
  h1.style.backgroundColor = getRGB();
  const ranNum = getRandom(0, 100);
  span.innerHTML = ranNum;
});
