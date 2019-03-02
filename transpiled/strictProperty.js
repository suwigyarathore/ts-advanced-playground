"use strict";
var Library = /** @class */ (function () {
    function Library() {
        this.address = "1 Duck Lane";
        this.isPublic = true;
    }
    return Library;
}());
var library = new Library();
// sometime later & elsewhere in our codebase..
var shortTitles = library.titles.filter(function (book) { return book.length < 5; });
