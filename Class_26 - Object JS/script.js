var user = {
  username: "Sapnendra",
  age: 22,
  city: "Bhopal",
  isGoodInJS: true,
  skills: [
    "HTML5",
    "CSS3",
    "JavaScript",
    "jQuery",
    "GSAP",
    "FramerMotion",
    "ReactJS",
    "NodeJS",
    "ExpressJS",
    "MongoDB",
  ],
  talk: () => {
    // funtion inside an object is known as method
    console.log("He is talking");
  },
};

console.log("Name: ", user.username);
console.log("Age: ", user.age);
console.log("Hometown: ", user.city);
console.log("Proficient in JS: ", user.isGoodInJS);
console.log("Skills: ");
user.skills.forEach((item, index) => {
    console.log(item);
});
user.talk();
