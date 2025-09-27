const playground = document.querySelector(".playground");
const allImg = document.querySelectorAll("img");

const getRandomNum = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

allImg.forEach((elem) => {
  elem.addEventListener("click", () => {
    const img = document.createElement("img");
    img.src = elem.getAttribute("src");
    img.style.left = `${getRandomNum(0, 100)}%`
    img.style.top = `${getRandomNum(0, 100)}%`
    img.style.transform = `rotate(${getRandomNum(0, 360)}deg)`
    playground.appendChild(img);
  });
});
