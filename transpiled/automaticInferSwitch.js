"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
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
                todos: __spread(state.todos, [action.payload])
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
