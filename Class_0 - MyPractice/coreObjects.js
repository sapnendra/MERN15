// let person = {
//   name: "Sapnendra",
//   age: 22,
//   isStudent: true,
//   greet: function () {
//     console.log("Hello, my name is " + this.name);
//   }
// };


// const user = {
//     username: "Saurabh",
//     old: 24,
// }
// const target = {};


// console.log(Object.keys(person));                    // returns keys
// console.log(Object.values(person));                  // returns values
// console.log(Object.entries(person));                 // returns key-value pairs
// console.log(Object.assign(target, person, user));    // copies properties
// console.log(user);
// Object.freeze(user);                                 // makes object immutable
// Object.seal(user);                                   // allows changes but prevents adding/removing keys
// user.old = 12;
// console.log(user);


// let user = {};
// Object.defineProperty(user, "id", {
//   value: 101,
//   writable: false,
//   enumerable: true,
//   configurable: false
// });
// console.log(user.id); // 101
// user.id = 202;        // ❌ Won’t change (writable: false)
// console.log(user.id)


let student = {
  firstName: "Anjali",
  lastName: "Jaiswal",
  get fullName() {
    return this.firstName + " " + this.lastName;
  },
  set fullName(name) {
    [this.firstName, this.lastName] = name.split(" ");
  }
};

console.log(student.fullName);  // Anjali Jaiswal
student.fullName = "Priya Sharma";
console.log(student.firstName); // Priya
