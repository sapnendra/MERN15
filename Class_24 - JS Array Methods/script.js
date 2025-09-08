// heterogenious - array can store multiple type of data
// let arr = [23, 43, 54, 7, 8, 12];
// arr.sort(); // most cases it will sort as a string
// console.log(arr.reverse());

let arr = [23, 43, 54, 7, 43, 12];
let val = arr.find((element) => {
    if (element == 43) {
        return true;
    }
    return false;
});

console.log(val);