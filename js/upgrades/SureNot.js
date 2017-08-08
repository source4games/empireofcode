"use strict";

function sureNot(line) {
    return line.startsWith('not ')?line:'not '+line;
}

var assert = require('assert');

if (!global.is_checking) {
    // These "asserts" using only for self-checking and not necessary for auto-testing
    assert.equal(sureNot("sure"), "not sure", "1st example");
    assert.equal(sureNot("not sure"), "not sure", "2nd example");
    assert.equal(sureNot("noter"), "not noter", "3nd example");
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}

