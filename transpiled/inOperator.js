"use strict";
function redirect(usr) {
    if ('role' in usr) /*isAdmin(user)*/ {
        console.log(usr); //Automatic inferred as Admin
    }
    else {
        console.log(usr);
    }
}
function isAdmin(usr) {
    return usr.role !== undefined;
}
