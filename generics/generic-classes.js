"use strict";
var arrayType = [1, 2, 3, 4, 5];
var arrayGeneric = [1, 2, 3, 4, 5];
// Generic Constraints
var GenericsClass = /** @class */ (function () {
    function GenericsClass(type1, type2) {
        this.type1 = type1;
        this.type2 = type2;
    }
    GenericsClass.prototype.printType1 = function () {
        return this.type1;
    };
    GenericsClass.prototype.printType2 = function () {
        return this.type2;
    };
    return GenericsClass;
}());
var genericsClass = new GenericsClass("Test", 1212);
// Specific Type
var genericsClass2 = new GenericsClass(1234, 234);
