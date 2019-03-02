"use strict";
var node;
var firstAction = { type: "LOGIN" };
var secondAction = { type: "LOAD_POSTS" };
var actionNode1 = {
    value: firstAction,
    next: null,
    prev: null
};
var actionNode2 = {
    value: secondAction,
    next: null,
    prev: actionNode1
};
actionNode1.next = actionNode2;
var currentNode = actionNode2;
do {
    console.log(currentNode.value);
    currentNode = currentNode.prev;
} while (currentNode);
