"use strict";

function myMax(a, b) {
    // Your code here
    // It's main function. Don't remove this function
    // It's used for auto-testing and must return a result for check.  
    return a>b?a:b;

    // replace this for solution
    return a;
}

var assert = require('assert');

if (!global.is_checking) {
    // These "asserts" using only for self-checking and not necessary for auto-testing
    assert(myMax(3, 3) == 3, "First");
    assert(myMax(0, 1) == 1, "Second");
    assert(myMax(3, 2) == 3, "Third");
    console.log("All set? Click \"Check\" to review your code and earn rewards!");
}
