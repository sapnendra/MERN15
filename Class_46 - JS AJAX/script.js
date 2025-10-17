class Greet {
  constructor(name, val) {
    this.name = name;
    this.val = val;
  }

  greet() {
    console.log(`Hello, ${this.name}! Your value is ${this.val}.`);
  }
}

const obj = new Greet("John", 42);
obj.greet();

let user = obj;
user.greet();

console.log(obj === user);