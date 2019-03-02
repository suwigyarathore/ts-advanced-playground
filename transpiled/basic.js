"use strict";
var BasicClass = /** @class */ (function () {
    function BasicClass(basicField) {
        this.basicField = basicField;
    }
    return BasicClass;
}());
var basicObject = new BasicClass("basicValue");
console.log(basicObject.basicField);
