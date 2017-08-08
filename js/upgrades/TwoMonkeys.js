"use strict";

function twoMonkeys(asmile, bsmile) {
    return asmile==bsmile;
}

var assert = require('assert');

if (!global.is_checking) {

    assert(twoMonkeys(true, true) == true, "First");
    assert(twoMonkeys(false, false) == true, "Second");
    assert(twoMonkeys(true, false) == false, "Third");
    assert(twoMonkeys(false, true) == false, "Forth");
    console.log("All set? Click \"Check\" to review your code and earn rewards!");
}
