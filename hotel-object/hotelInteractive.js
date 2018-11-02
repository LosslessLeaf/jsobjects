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
    availability: "Currently Available",
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
    availability: "Currently Available",
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
    availability: "Currently Available",
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
    availability: "Currently Available",
    price: 1000

};


function populate() {
    var roomName = document.getElementById("common-room").value;
    for (let i = 0; i < vacant.length; i++) {
        roomName.innerHTML = vacant[i].room;
    }

    // if (Room.classList.contains("room-name")) {
    //     Room.classList.remove("room-name");
    //     Room.classList.add("room-name-displayed");
    // }
    // else {
    //     Room.classList.remove("room-name-displayed");
    //     Room.classList.add("room-name");
    // }
}

function selectedRoom() {
    var chosenRoom = document.getElementById("hotel-room").value;
    for (let i = 0; i < vacant.length; i++) {
        if (chosenRoom == vacant[i].room) {
            document.getElementById("chosen-room").innerText = 
`${chosenRoom}`;
        document.getElementById("amenities").innerText = `Amenities:`;
        document.getElementById("amen1").innerText = vacant[i].amenities.mattress;
        document.getElementById("amen2").innerText = vacant[i].amenities.smoking;
        document.getElementById("amen3").innerText = vacant[i].amenities.wifi;
        document.getElementById("amen4").innerText = vacant[i].amenities.hottub;
        document.getElementById("occupancy").innerText = vacant[i].occupancy;
        document.getElementById("availability").innerText = vacant[i].availability;
        document.getElementById("price").innerText = vacant[i].price;
        }
    }

}


function validateForm() {
    var x = document.forms["myForm"]["fname"].value;

    if (x == "") {
        alert("Name must be filled out");
        return false;
    }
    else {
        alert(x);
        document.getElementById("fname")
            .addEventListener("keyup", event => {
                event.preventDefault();
                if (event.keyCode === 13) {
                    document.getElementById("submit").click();
                }
            });
    }


}
