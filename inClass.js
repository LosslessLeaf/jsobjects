// var people = ["Christian", "Melissa", "Tom", "Josh", "Alejandra"];

// for (let i = 0; i < people.length; i++) {
//     console.log(`Hello ${people[i]}`);
// }



var readline = require("readline-sync");

const sayHello = x => {
    let milliseconds = 1000;
    let dot = ".";
        setTimeout(function() {console.log("Hello" + dot)}, milliseconds);
        setTimeout(function() {console.log("Hello" + dot + dot)}, milliseconds * 2);
        setTimeout(function() {console.log("Hello" + dot + dot + dot)}, milliseconds * 3);
}

sayHello();