// A shallow copy creates a new object, but only copies the first level of properties. If those properties are objects/arrays, they are still referenced (not duplicated).

// // Example:
// let obj = {
//   name: "Sapnendra",
//   address: {
//     city: "Bhopal",
//     pin: 462022,
//   },
// };
// // Shallow copy using spread operator
// let shallowCopy = { ...obj };

// shallowCopy.name = "Jaiswal";
// shallowCopy.address.city = "Delhi";

// console.log(obj.name); // "Sapnendra" (primitive copied)
// console.log(obj.address.city); // "Delhi" (nested object - reference copied)

/*
Ways to make a shallow copy :

Spread operator → { ...obj }
Object.assign() → Object.assign({}, obj)
Array methods (for arrays) → slice(), concat()
*/



// A deep copy duplicates everything, including nested objects/arrays. So changes in the copy won’t affect the original object.
// Example:
let obj = {
  name: "Sapnendra",
  address: {
    city: "Bhopal",
    pin: 462022,
  },
};
console.log(JSON.parse(JSON.stringify(obj)));

// Deep copy using structuredClone (modern)
// let deepCopy = structuredClone(obj);
// deepCopy.address.city = "Mumbai";
// console.log(obj.address.city);  // "Varanasi"
// console.log(deepCopy.address.city); // "Mumbai"

/*
Ways to make a deep copy:

1. structuredClone(obj) → (Modern & recommended)
2. JSON method → JSON.parse(JSON.stringify(obj));
    - Limitations: loses functions, undefined, Date, Map, Set.
3. Libraries → lodash.cloneDeep(obj)
*/