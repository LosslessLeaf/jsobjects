var readline = require("readline-sync");

var vacant = [];

var occupied = [];

vacant[0] = {
    room: "The Common Room",
    mattress: "Twin Mattress",
    smoking: "No Smoking",
    wifi: "No wifi",
    hottub: "No Hot tub",
    occupancy: 1,
    availability: "Currently Available",
    price: 60
};
vacant[1] = {
    room: "The State Room",
    mattress: "Queen Mattress",
    smoking: "No Smoking",
    wifi: "Wifi",
    hottub: "No Hot tub",
    occupancy: 2,
    availability: "Currently Available",
    price: 100
};
vacant[2] = {
    room: "The Presidential Suite",
    mattress: "California King Mattress",
    smoking: "Smoking",
    wifi: "Wifi",
    hottub: "No Hot tub",
    occupancy: 4,
    availability: "Currently Available",
    price: 250
};
vacant[3] = {
    room: "The Penthouse",
    mattress: "Two King Mattresses",
    smoking: "Smoking",
    wifi: "Wifi",
    hottub: "Hot tub",
    occupancy: 6,
    availability: "Currently Available",
    price: 1000
};

do {
    do {
        var chosenRoom = readline.question("Please choose a room (1-4): ");
        if (chosenRoom == 1 || chosenRoom == 2 || chosenRoom == 3 || chosenRoom == 4) {
            if (chosenRoom == 1) {
                occupied.push(vacant[0]);
                vacant.splice(0, 1);
            }

            if (chosenRoom == 2) {
                occupied.push(vacant[1]);
                vacant.splice(1, 1);
            }

            if (chosenRoom == 3) {
                occupied.push(vacant[2]);
                vacant.splice(2, 1);
            }

            if (chosenRoom == 4) {
                occupied.push(vacant[3]);
                vacant.splice(3, 1);
            }


            console.log(`You have chosen:
====================
${occupied[0].room}
====================
Amenities:
${occupied[0].mattress}
${occupied[0].smoking}
${occupied[0].wifi}
${occupied[0].hottub}
Occupancy: ${occupied[0].occupancy}
${occupied[0].availability}
$${occupied[0].price} per night
`);
            do {
                var confirmRoom = readline.question(`Would you like this room? (Y/N): `).toUpperCase();

                if (confirmRoom == "Y" || confirmRoom == "N") {
                    if (confirmRoom == "Y") {
                        console.log(
                            `
You have confirmed:
=========================
    ${occupied[0].room}
=========================
Enjoy Your Stay!`
                        );
                    }
                    else if (confirmRoom == "N") {
                        vacant.splice(chosenRoom - 1, 0, occupied[0]);
                        occupied.splice(0, 1);
                    }
                    invalid = false;
                }
                else {
                    console.log("That is not a valid input");
                    var invalid = true;
                }
            } while (invalid == true);
            checker = false;
        }
        else {
            console.log("That is not a valid input");
            var checker = true;
        }
    }
    while (checker == true);

}

while (confirmRoom == "N");
