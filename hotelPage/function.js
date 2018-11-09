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

function displayRoom() {
    document.getElementById("second-container").style.display = "none";
}

function common() {
    document.getElementById("common-container").style.display = "flex";
}

function state() {
    document.getElementById("state-container").style.display = "flex";
}