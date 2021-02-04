"use strict";
var Student = /** @class */ (function () {
    function Student(id) {
        this.id = id;
    }
    Student.prototype.getId = function () {
        return "This is your ID " + this.id;
    };
    return Student;
}());
var student1 = new Student('20140582-C');
