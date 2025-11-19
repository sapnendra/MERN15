function createCounter(start = 0) {
  let count = start;
  return {
    increment() {
      count += 1;
      return count;
    },
    decrement() {
      count -= 1;
      return count;
    },
    get() {
      return count;
    },
  };
}

const counterA = createCounter(100);
const counterB = createCounter(100);

console.log("counterA.get()", counterA.get()); // 100
console.log("counterA.increment()", counterA.increment()); // 101
console.log("counterA.increment()", counterA.increment()); // 102
console.log("counterB.get()", counterB.get()); // 100
console.log("counterB.decrement()", counterB.decrement()); // 99
console.log("counterB.decrement()", counterB.decrement()); // 98
console.log("counterA.get() still", counterA.get()); // 102
console.log("counterB.get() still", counterB.get()); // 98
























// // Example 2: Closure in loops - classic pitfall with var
// console.log('\nloop with var (pitfall):');
// for (var i = 0; i < 3; i++) {
//   setTimeout(function () {
//     // All callbacks share the same `i` variable -> prints 3,3,3
//     console.log('var i =', i);
//   }, 10 * i);
// }

// // Fix A: use let (block-scoped variable)
// console.log('loop with let (fix):');
// for (let j = 0; j < 3; j++) {
//   setTimeout(function () {
//     // Each iteration has its own j -> prints 0,1,2
//     console.log('let j =', j);
//   }, 10 * j);
// }

// // Fix B: create a closure with an IIFE (works with var)
// console.log('loop with IIFE (fix):');
// for (var k = 0; k < 3; k++) {
//   (function (kCopy) {
//     setTimeout(function () {
//       console.log('iife k =', kCopy); // prints 0,1,2
//     }, 10 * kCopy);
//   })(k);
// }
