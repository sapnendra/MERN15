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
const card = document.querySelector(".card");
const statusDetsImg = document.querySelector(".details img");
const statusDetsName = document.querySelector(".details h3");
const statusDetsTime = document.querySelector(".details h5");

let clutter = "";
userStatus.forEach((item, idx) => {
  clutter += `<div id="${idx}" class="status">
                <img src="${item.image}">
                <h3>${item.fullName}</h3>
              </div>`;
});

allStatus.innerHTML = clutter;

let currentIdx = 0;
function showStatus(idx) {
  if (idx < 0 || idx >= userStatus.length) return;

  let status = userStatus[idx];
  full.style.backgroundImage = `url(${status.image})`;
  statusDetsImg.src = status.image;
  statusDetsName.textContent = status.fullName;

  let date = new Date();
  let time = `${date.getHours()}:${date.getMinutes()}:${
    date.getSeconds() < 9 ? 0 + date.getSeconds() : date.getSeconds()
  }`;
  statusDetsTime.textContent = time;

  let grow = 0;
  inner.style.width = "0%";
  full.style.display = "block";
  let inter = setInterval(() => {
    grow++;
    inner.style.width = `${grow}%`;
  }, 30);
  setTimeout(() => {
    clearInterval(inter);
    full.style.display = "none";
    inner.style.width = "0%";
    if (idx + 1 < userStatus.length) {
      showStatus(idx + 1);
    }
  }, 3000);
}

allStatus.addEventListener("click", function (event) {
  let idx = Number(event.target.id); // Must make sure each status element has its id set to the index
  showStatus(idx);
});
