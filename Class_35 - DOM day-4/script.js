const h1 = document.querySelector("h1");
const h2 = document.querySelector("h2");
const h3 = document.querySelector("h3 #team-name");
const h4 = document.querySelector("h4 #team-record");

const btn = document.querySelector("button");

let teams = [
  {
    shortName: "CSK",
    fullName: "Chennai Super Kings",
    primary: "yellow",
    secondary: "blue",
    record: 2,
  },

  {
    shortName: "RCB",
    fullName: "Royal Challengers Banglore",
    primary: "red",
    secondary: "black",
    record: 6,
  },

  {
    shortName: "KKR",
    fullName: "King K Ring",
    primary: "green",
    secondary: "pink",
    record: 5,
  },
];

const getRandom = (min, max) => {
  const ran = Math.floor(Math.random() * teams.length);
  return ran;
};

btn.addEventListener("click", () => {
  let idx = getRandom(getRandom() * teams.length);
  console.log(teams[idx].fullName);

  h2.textContent = teams[idx].fullName;
  h2.style.color = teams[idx].primary;
  h2.style.backgroundColor = teams[idx].secondary;

  h3.textContent = teams[idx].shortName;

  h4.textContent = teams[idx].record;
});
