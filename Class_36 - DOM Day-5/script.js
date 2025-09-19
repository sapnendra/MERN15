const getRandom = (min, max) => {
  const ran = Math.floor(Math.random() * (max - min + 1) + min);
  return ran;
};

const menu = document.querySelector(".menu");
const right = document.querySelector(".right");
const h4 = document.querySelector("h4");

let flag = 0;

menu.addEventListener("click", () => {
    if(flag === 0) {
        right.style.right = "0%";
        h4.innerHTML = "<i class='ri-close-large-line'></i>"
        flag = 1;
    } else {
        right.style.right = `${-50}%`
        h4.innerHTML = "<i class='ri-menu-3-line'></i>"
        flag = 0;
    }
});
