var venue = {
    seatsAvail: {
        a: [1, 2, 3, 4, 5, 6, 7, 8, 9],
        b: [1, 2, 3, 4, 5, 6, 7, 8, 9],
        c: [1, 2, 3, 4, 5, 6, 7, 8, 9]
    },
    seats: function() {
        var rowA = seatsAvail.a;
        // var rowB = seatsAvail.b;
        // var rowC = seatsAvail.c;
        
        var seatChart = document.getElementById("seat-chart-grid");
        
        var seatsToPick = "";
        for (let i = 0; i < this.rowA.length; i++) {
            seatsToPick+= `<li><input type="checkbox">${rowA[i]}</li>`;
            alert(seatsToPick);
        }
        seatChart.innerHTML = seatsToPick;
    },

};
