"use strict";
var mvp = {
    player: "Kobe",
    team: "Lakers",
    former: true,
    mostPoints: 60,
    printHighestScore: function () {
        console.log("Highest score is " + this.mostPoints);
    }
};
var mvp1 = function (mvp) {
    console.log("Highest score is " + mvp.mostPoints);
};
