"use strict";
var stringFunction = function () {
    console.log("Hello!");
};
var calc = function (val1, val2) {
    var total = val1 + val2;
    return total;
};
var universal;
universal = calc;
console.log(universal(1, 2));
