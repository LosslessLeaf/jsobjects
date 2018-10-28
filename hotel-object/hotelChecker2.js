var readline = require("readline-sync");

var vacant = [];

var occupied = [];

vacant[0] = {
    room: "The Common Room",
    mattress: "Twin Mattress",
    smoking: "No Smoking",
    wifi: "No wifi",
    hottub: "No Hot tub",
    occupancy: "Occupancy: 1",
    availability: "Currently Available"

};
vacant[1] = {
    room: "The State Room",
    mattress: "Queen Mattress",
    smoking: "No Smoking",
    wifi: "Wifi",
    hottub: "No Hot tub",
    occupancy: "Occupancy: 2",
    availability: "Currently Available"
};
vacant[2] = {
    room: "The Presidential Suite",
    mattress: "California King Mattress",
    smoking: "Smoking",
    wifi: "Wifi",
    hottub: "No Hot tub",
    occupancy: "Occupancy: 4",
    availability: "Currently Available"
};
vacant[3] = {
    room: "The Penthouse",
    mattress: "Two King Mattresses",
    smoking: "Smoking",
    wifi: "Wifi",
    hottub: "Hot tub",
    occupancy: "Occupancy: 6",
    availability: "Currently Available"
};

do {
// console.log(vacant);
var chosenRoom = readline.question("Please choose a room (1-4): ");

if (chosenRoom == 1) {
    occupied.push(vacant[0]);
    delete vacant[0];
}

if (chosenRoom == 2) {
    occupied.push(vacant[1]);
    delete vacant[1];
}

if (chosenRoom == 3) {
    occupied.push(vacant[2]);
    delete vacant[2];
}

if (chosenRoom == 4) {
    occupied.push(vacant[3]);
    delete vacant[3];
}

// console.log(vacant);
console.log(`You have chosen:
====================
${JSON.stringify(occupied[0].room)}
====================
Amenities:

${JSON.stringify(occupied[0].mattress)}
${JSON.stringify(occupied[0].smoking)}
${JSON.stringify(occupied[0].wifi)}
${JSON.stringify(occupied[0].hottub)}
${JSON.stringify(occupied[0].occupancy)}
${JSON.stringify(occupied[0].availability)}
`);

var confirmRoom = readline.question("Would you like this room? (Y/N): ").toUpperCase();

if (confirmRoom == "Y") {
    console.log(`You have confirmed:
====================
${JSON.stringify(occupied[0].room)}
====================

Enjoy Your Stay!`);
}
}
// else if (confirmRoom == "N") {
//     vacant.push(occupied[chosenRoom]);
//     delete occupied[0];
//     chosenRoom = readline.question(`Please choose a different room (1-4): `);
    
//     if (chosenRoom == 1) {
//         vacant.push(vacant[0]);
//         delete vacant[0];
//     }

//     if (chosenRoom == 2) {
//         occupied.push(vacant[1]);
//         delete vacant[1];
//     }

//     if (chosenRoom == 3) {
//         occupied.push(vacant[2]);
//         delete vacant[2];
//     }

//     if (chosenRoom == 4) {
//         occupied.push(vacant[3]);
//         delete vacant[3];
//     }
// }

while(confirmRoom == "N");