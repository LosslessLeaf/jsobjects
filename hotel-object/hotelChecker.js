var readline = require("readline-sync");

var vacant = {
    room1: {
        room: 1,
        available: true,
        amenitites: {
            smoking: true,
            wifi: true,
<<<<<<< HEAD
        }
=======
            
>>>>>>> bcc97376d4f3c64c1b0e7de6e31354a454a4031d
    },
    room2: {
        room: 2,
        available: true,
        smoking: false,
        wifi: false,
        hotTub: false
    },
    room3: {
        room: 3,
        available: true,
        smoking: false,
        wifi: true,
        hotTub: false
    },
    room4: {
        room: 4,
        available: true,
        smoking: false,
        wifi: true,
        hotTub: true
    }
};

var chosenRoom = readline.question(`
Room1: ${Object.keys(vacant.room1)}
Room2: ${Object.keys(vacant.room2)}
Room3: ${Object.keys(vacant.room3)}
Room4: ${Object.keys(vacant.room4)}
<<<<<<< HEAD
=======

>>>>>>> bcc97376d4f3c64c1b0e7de6e31354a454a4031d
Which room would you like? `).toLowerCase();

if(chosenRoom == "room1") {
    vacant.room1.available = false;
}
if(chosenRoom == "room2") {
    vacant.room2.available = false;
}
if(chosenRoom == "room3") {
    vacant.room3.available = false;
}
if(chosenRoom == "room4") {
    vacant.room4.available = false;
}

var occupied = [];
// occupied.push(vacant[chosenRoom]);

// console.log(`Rooms now occupied: ${JSON.stringify(occupied)}`);
// delete vacant[chosenRoom];

if(occupied == []) {
    console.log(vacant);
}
// console.log(hotel[chosenRoom].available);