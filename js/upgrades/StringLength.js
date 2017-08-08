"use strict";

function strLength(line) {
    return line.length;
}

var assert = require('assert');

if (!global.is_checking) {
    // These "asserts" using only for self-checking and not necessary for auto-testing
    assert.equal(strLength(""), 0, "1st example");
    assert.equal(strLength("mo"), 2, "2nd example");
    assert.equal(strLength("length"), 6, "3nd example");
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}

