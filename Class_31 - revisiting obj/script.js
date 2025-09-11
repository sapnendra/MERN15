var obj = [
  {
    user: "Sapnendra",
    age: 22,
    skills: ["fullstack", "backend", "designer"],
    address: {
      city: "Reewa",
      state: "MP",
      country: ["india", "UK", "USA"],
    },
    greet: () => {
      return "Hi"
    }
  },
  {
    user: "Mayank",
    age: 22,
    skills: ["frontend", "editor", "designer", "busineess"],
    address: {
      city: "Sidhi",
      state: "MP",
      country: ["India", "USA"],
    },
    greet: () => {
      return "Hello"
    }
  },
  {
    user: "Swaraj",
    age: 22,
    skills: ["designer", "developer", "designer"],
    address: {
      city: "Singrauli",
      state: "MP",
      country: ["UAE", "India"],
    },
    greet: () => {
      return "Welcome";
    },
  },
];


// console.log(obj[2].greet());
obj.forEach((element, idx) => {
  console.log("Last skill of User: ",element.skills[element.skills.length - 1]);
  console.log("Dialog of User: ", element.address.country[element.address.country.length-1])
  console.log("Dialog of User: ", element.greet())

});
