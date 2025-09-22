// const img = [
//   "https://images.unsplash.com/photo-1439778615639-28529f7628bc?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3OTkzMzR8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NTY3NjU4OTR8&ixlib=rb-4.1.0&q=85",
//   "https://images.unsplash.com/photo-1463453091185-61582044d556?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3OTkzMzR8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NTY3NjU4OTR8&ixlib=rb-4.1.0&q=85",
//   "https://images.unsplash.com/photo-1502323703385-c3ea9ace787d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3OTkzMzR8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NTY3NjU4OTR8&ixlib=rb-4.1.0&q=85",
//   "https://images.unsplash.com/photo-1499155286265-79a9dc9c6380?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3OTkzMzR8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NTY3NjU4OTR8&ixlib=rb-4.1.0&q=85",
//   "https://images.unsplash.com/photo-1504051771394-dd2e66b2e08f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3OTkzMzR8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NTY3NjU4OTR8&ixlib=rb-4.1.0&q=85",
//   "https://images.unsplash.com/photo-1502323703385-c3ea9ace787d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3OTkzMzR8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NTY3NjU4OTR8&ixlib=rb-4.1.0&q=85",
//   "https://images.unsplash.com/photo-1504051771394-dd2e66b2e08f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3OTkzMzR8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NTY3NjU4OTR8&ixlib=rb-4.1.0&q=85",
// ];

const getRandom = () => {
  return Math.floor(Math.random() * 100);
};

// const btn = document.querySelector(".btn");
// const img1 = document.querySelector("#img1");
// const img2 = document.querySelector("#img2");

// btn.addEventListener("click", () => {
//   const img1Src = img1.getAttribute("src");
//   const img2Src = img2.getAttribute("src");
//   img1.setAttribute("src", img2Src);
//   img2.setAttribute("src", img1Src);
// });

const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  const img = document.createElement("img");
  img.src =
    "https://images.unsplash.com/photo-1504051771394-dd2e66b2e08f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3OTkzMzR8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NTY3NjU4OTR8&ixlib=rb-4.1.0&q=85";
  document.body.appendChild(img);
  img.style.left = `${getRandom()}%`;
  img.style.top = `${getRandom()}%`;
});
