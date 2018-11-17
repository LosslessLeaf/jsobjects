// create a program that's going to allow people to rent rooms in our hotel
// first we are going to start off by creating an object
const hotel = {
    sayHello: function sayHello(a, b) {
        console.log("Hello", a, b);
    },
    sayHello2: (a, b) => {
        console.log("Hello", a, b);
    }
};

hotel.sayHello2("Joe", "This is your home now.");