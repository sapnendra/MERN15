// const h1 = document.querySelector("h1");
// const h2 = document.querySelector("h2");
// const h3Span = document.querySelector("h3 #team-name");
// const h4Span = document.querySelector("h4 #team-record");

// const btn = document.querySelector("button");

// let teams = [
//   {
//     shortName: "CSK",
//     fullName: "Chennai Super Kings",
//     primary: "yellow",
//     secondary: "blue",
//     record: 2,
//   },

//   {
//     shortName: "RCB",
//     fullName: "Royal Challengers Banglore",
//     primary: "red",
//     secondary: "black",
//     record: 6,
//   },

//   {
//     shortName: "KKR",
//     fullName: "King K Ring",
//     primary: "green",
//     secondary: "pink",
//     record: 5,
//   },
// ];

// const getRandom = () => {
//   const ran = Math.floor(Math.random() * teams.length);
//   return ran;
// };

// btn.addEventListener("click", () => {
//   let idx = getRandom();

//   h2.textContent = teams[idx].fullName;
//   h2.style.color = teams[idx].primary;
//   h2.style.backgroundColor = teams[idx].secondary;

//   h3Span.textContent = teams[idx].shortName;
//   h4Span.textContent = teams[idx].record;
// });

const box = document.querySelector(".box");
const btn = document.querySelector("button");

const getRandom = () => {
  const ran = Math.floor(Math.random() * 100);
  return ran;
};

btn.addEventListener("click", () => {
  const left = getRandom();
  const top = getRandom();
  const rotate = getRandom();

  box.style.left = `${left}%`;
  box.style.top = `${top}%`;
  box.style.transform = `rotate(${rotate}deg)`;
  box.style.backgroundColor = `rgb(${getRandom()}, ${getRandom()}, ${getRandom()})`;

  btn.style.color = `rgb(${getRandom()}, ${getRandom()}, ${getRandom()})`;
  btn.style.backgroundColor = `rgb(${getRandom()}, ${getRandom()}, ${getRandom()})`;
  document.body.style.backgroundColor = `rgb(${getRandom()}, ${getRandom()}, ${getRandom()})`;
});
