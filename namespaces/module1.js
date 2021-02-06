"use strict";
var myNameSpace;
(function (myNameSpace) {
    myNameSpace.text = "World";
    myNameSpace.displayData = function () {
        return "Hello";
    };
})(myNameSpace || (myNameSpace = {}));
console.log(myNameSpace.text);
