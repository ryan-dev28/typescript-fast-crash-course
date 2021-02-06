var myNameSpace;
(function (myNameSpace) {
    myNameSpace.text = "World";
    myNameSpace.displayData = function () {
        return "Hello";
    };
})(myNameSpace || (myNameSpace = {}));
console.log(myNameSpace.text);
///<reference path='../namespaces/module1.ts' />
var thisSpace = myNameSpace;
console.log(thisSpace.text);
