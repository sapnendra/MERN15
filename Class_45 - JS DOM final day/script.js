let userStatus = [
  {
    fullName: "Kim Huels",
    image:
      "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/male/512/53.jpg",
  },
  {
    fullName: "Debbie Steuber",
    image:
      "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/male/512/39.jpg",
  },
  {
    fullName: "Sapnendra",
    image:
      "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/male/512/25.jpg",
  },
  {
    fullName: "Shelia Schmidt",
    image:
      "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/male/512/84.jpg",
  },
  {
    fullName: "Miss Lisa Douglas-Quigley",
    image:
      "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/male/512/50.jpg",
  },
  {
    fullName: "Enrique Lynch Jr.",
    image:
      "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/male/512/88.jpg",
  },
  {
    fullName: "Luz Grimes",
    image:
      "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/male/512/72.jpg",
  },
  {
    fullName: "Gayle Ritchie",
    image:
      "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/male/512/23.jpg",
  },
  {
    fullName: "Dr. Kenneth Kemmer",
    image:
      "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/male/512/42.jpg",
  },
  {
    fullName: "Alberto McDermott",
    image:
      "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/male/512/11.jpg",
  },
];

const allStatus = document.querySelector(".allStatus");
const full = document.querySelector("#full");
const inner = document.querySelector(".inner");
const outer = document.querySelector(".outer");

let clutter = "";
userStatus.forEach((item, idx) => {
  clutter += `<div id="${idx}" class="status">
                <img src="${item.image}">
                <h3>${item.fullName}</h3>
            </div>`;
});

allStatus.innerHTML = clutter;

allStatus.addEventListener("click", (dets) => {
  let img = userStatus[dets.target.id].image;
  full.style.backgroundImage = `url(${img})`;
  full.style.display = "block";
  setTimeout(() => {
    full.style.display = "none";
  }, 2000);
//   let grow = 0;
//   let inter = setInterval(() => {
//     grow++;
//     h3.textContent = "Downloading... " + grow + "%";
//     h3.style.color = "rgb(255, 166, 0)";
//     inner.style.width = `${grow}%`;
//   }, 50);

//   setTimeout(() => {
//     btn.disabled = false;
//     h3.textContent = "Download Completed";
//     h3.style.color = "green";
//     inner.style.width = `0%`;
//     outer.style.display = "none";
//     clearInterval(inter);
//   }, 5000);
});
