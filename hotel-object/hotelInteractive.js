var vacant = [];

vacant[0] = {
    roomNumber: 101,
    room: "The Common Room",
    amenities: {
        mattress: "Twin Mattress",
        smoking: "No Smoking",
        wifi: "No wifi",
        hottub: "No Hot tub",
    },
    occupancy: 1,
    availability: "Available",
    price: 60
};
vacant[1] = {
    roomNumber: 202,
    room: "The State Room",
    amenities: {
        mattress: "Queen Mattress",
        smoking: "No Smoking",
        wifi: "Wifi",
        hottub: "No Hot tub"
    },
    occupancy: 2,
    availability: "Available",
    price: 100
};
vacant[2] = {
    roomNumber: 303,
    room: "The Presidential Suite",
    amenities: {
        mattress: "California King Mattress",
        smoking: "Smoking",
        wifi: "Wifi",
        hottub: "No Hot tub"
    },
    occupancy: 4,
    availability: "Available",
    price: 250
};
vacant[3] = {
    roomNumber: 404,
    room: "The Penthouse",
    amenities: {
        mattress: "Two King Mattresses",
        smoking: "Smoking",
        wifi: "Wifi",
        hottub: "Hot tub"
    },
    occupancy: 6,
    availability: "Available",
    price: 1000

};

function selectedRoom() {
    var displayProperty = document.getElementById("chosen-room-display");
    var chosenRoom = document.getElementById("hotel-room").value;
    if (displayProperty.classList.contains("no-display")) {
        displayProperty.classList.remove("no-display");
        displayProperty.classList.add("display");
    }


    for (let i = 0; i < vacant.length; i++) {
        if (chosenRoom == vacant[i].room) {
            document.getElementById("chosen-room").innerText = vacant[i].room;
            document.getElementById("amenities").innerText = `Amenities:`;
            document.getElementById("amen1").innerText = vacant[i].amenities.mattress;
            document.getElementById("amen2").innerText = vacant[i].amenities.smoking;
            document.getElementById("amen3").innerText = vacant[i].amenities.wifi;
            document.getElementById("amen4").innerText = vacant[i].amenities.hottub;
            document.getElementById("occupancy").innerText = `Occupancy: ${vacant[i].occupancy}`;
            document.getElementById("availability").innerText = `Currently: ${vacant[i].availability}`;
            document.getElementById("price").innerText = `Price per night: ${vacant[i].price}`;
        }
    }


}

function finalizedRoom() {
    var displayProperty = document.getElementById("redisplay");
    var finalRoom = document.getElementById("final-room");
    var chosenRoom = document.getElementById("hotel-room").value;
    
    if (finalRoom.classList.contains("no-display")) {
        displayProperty.classList.remove("display");
        displayProperty.classList.add("no-display");
        finalRoom.classList.add("display");
    
        for (let i = 0; i < vacant.length; i++) {
            if (chosenRoom == vacant[i].room) {
                document.getElementById("confirmed").innerText = `You have confirmed: ${vacant[i].room}`;
                document.getElementById("final-room-confirmed").innerText = `Thanks for choosing the Astoria Inn, and we hope you enjoy your stay!`;
            }
        }
    }

}
