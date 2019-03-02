"use strict";
var Add = /** @class */ (function () {
    function Add(payload) {
        this.payload = payload;
        this.type = "Add";
    }
    return Add;
}());
var RemoveAll = /** @class */ (function () {
    function RemoveAll() {
        this.type = "Remove All";
    }
    return RemoveAll;
}());
var RemoveOne = /** @class */ (function () {
    function RemoveOne(payload) {
        this.payload = payload;
        this.type = "Remove One";
    }
    return RemoveOne;
}());
function todoReducer(action, state) {
    if (state === void 0) { state = { todos: [] }; }
    switch (action.type) {
        case "Add": {
            return {
                todos: state.todos.concat([action.payload])
            };
        }
        case "Remove All": {
            return {
                todos: []
            };
        }
    }
    return state;
}
