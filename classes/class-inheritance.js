"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var StreetFighter = /** @class */ (function () {
    function StreetFighter() {
        this.character = 'Ryu';
    }
    StreetFighter.prototype.showCharacter = function () {
        return "You select " + this.character;
    };
    return StreetFighter;
}());
var Tekken = /** @class */ (function (_super) {
    __extends(Tekken, _super);
    function Tekken() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tekken.prototype.showCharacter = function () {
        this.character = 'Akuma';
        return "You select " + this.character;
    };
    return Tekken;
}(StreetFighter));
var streetFighter = new StreetFighter;
streetFighter.showCharacter();
var tekken = new Tekken;
tekken.showCharacter();
