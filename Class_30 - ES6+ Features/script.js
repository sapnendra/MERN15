// let a = 10;
// let fun = () => {
//   let a = 20;
//   console.log(a);
// };
// console.log(a);

// fun();
// console.log(a);

// if (true) {
//   let a;
// }

// function abs() {
//   var a = 10;
// }
// abs();
// console.log(a);

var arr = [
  {
    model: "iPhone 17 Pro",
    price: 1500000,
    isAvailabe: false,
    color: ["White", "Blue", "Black", "Red", "Yellow"],
    chip: "IOS 25",
  },
  {
    model: "One Plus 12R",
    price: 45000,
    isAvailabe: true,
    color: ["White", "Blue", "Black", "Red", "Yellow"],
    chip: "Snapdragon 8gen+",
  },
  {
    model: "Vivo T2x",
    price: 14000,
    isAvailabe: false,
    color: ["White", "Blue", "Black", "Red", "Yellow"],
    chip: "Snapdragon 6gen+",
  },
  {
    model: "Oppo k12x 5g",
    price: 13000,
    isAvailabe: true,
    color: ["White", "Blue", "Black", "Red", "Yellow"],
    chip: "Snapdragon 8gen+",
  },
  {
    model: "Itel 2i+",
    price: 9000,
    isAvailabe: false,
    color: ["White", "Blue", "Black", "Red", "Yellow"],
    chip: "Snapdragon 2gen+",
  },
];

arr.forEach((item) => {
  console.log(item);
});
