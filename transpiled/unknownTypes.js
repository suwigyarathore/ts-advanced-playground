"use strict";
var halloweenCostumeIdeas = "stringValue";
if (typeof halloweenCostumeIdeas === "string") {
    halloweenCostumeIdeas.indexOf("👽");
}
//halloweenCostumeIdeas.a.b.c.d;
//halloweenCostumeIdeas();
function randomCostume(ideas) {
    return ideas[Math.floor(Math.random() * ideas.length)];
}
