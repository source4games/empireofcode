"use strict";

var operationNames = ["conjunction", "disjunction", "implication", "exclusive", "equivalence"];

function boolean(x, y, operation){
    switch(operation) {
        case operationNames[0]:
            return (x&&y)?1:0;
        case operationNames[1]:
            return (x||y)?1:0;
        case operationNames[2]:
            return (!x||y)?1:0;
        case operationNames[3]:
            return (!x!=!y)?1:0;
        case operationNames[4]:
            return (x==y)?1:0;
    }
    
    return 1;
}

var assert = require('assert');

if (!global.is_checking) {
    // These "asserts" using only for self-checking and not necessary for auto-testing
    assert.equal(boolean(1, 0, "conjunction"), 0, "and");
    assert.equal(boolean(1, 0, "disjunction"), 1, "or");
    assert.equal(boolean(1, 1, "implication"), 1, "material");
    assert.equal(boolean(0, 1, "exclusive"), 1, "xor");
    assert.equal(boolean(0, 1, "equivalence"), 0, "same?");
    console.log("Now that you're finished, hit the 'Check' button to review your code and earn sweet rewards!");
}
