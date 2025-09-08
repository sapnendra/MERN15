function a1() {
    console.log("Hello 1");
}

var a2 = function() {
    console.log("Hello 2");
}

var a3 = () => {
    console.log("Hello 3");
}

var a4 = () => console.log("Hello 4");


a1();
a2();
a3();
a4();