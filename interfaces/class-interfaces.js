"use strict";
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.eat = function (food) {
        return "Eating " + food;
    };
    ;
    Person.prototype.play = function (game) {
        return "Playing " + game;
    };
    Person.prototype.watch = function (movie) {
        return "Watching " + movie;
    };
    return Person;
}());
var person1 = new Person();
person1.eat("Chicken");
person1.play("Basketball");
person1.watch("Pokemon");
