"use strict";
var test = ["test", 12];
var Marvel;
(function (Marvel) {
    Marvel[Marvel["Spiderman"] = 0] = "Spiderman";
    Marvel[Marvel["Cyclops"] = 1] = "Cyclops";
})(Marvel || (Marvel = {}));
;
var heroes = Marvel.Spiderman;
// Union Types | <- Pipe symbol
var primitiveTypes;
var strongTypes;
