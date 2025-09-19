const menu = document.querySelector(".menu");
const menuItem = document.querySelectorAll(".menu-item");
menu.addEventListener("click", () => {
  menuItem.forEach((item) => {
    if (item.classList.contains("hidden")) {
      item.classList.remove("hidden");
    } else {
      item.classList.add("hidden");
    }
  });
});
