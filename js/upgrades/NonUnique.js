"use strict";

function nonUnique(data) {
    var ret = [];
    var counts = {};
    
    data.forEach(function(entry) {
        counts[entry] = counts[entry] ? counts[entry] + 1 : 1;

    });
    
    data.forEach(function(entry) {
        if (counts[entry] > 1) {
            ret.push(entry);
        }

    });
    
    return ret;
}

var assert = require('assert');

if (!global.is_checking) {
    assert.deepEqual(nonUnique([1, 2, 3, 1, 3]), [1, 3, 1, 3], "1st example");
    assert.deepEqual(nonUnique([1, 2, 3, 4, 5]), [], "2nd example");
    assert.deepEqual(nonUnique([5, 5, 5, 5, 5]), [5, 5, 5, 5, 5], "3rd example");
    assert.deepEqual(nonUnique([10, 9, 10, 10, 9, 8]), [10, 9, 10, 10, 9], "4th example");
    assert.deepEqual(nonUnique(['P', 7, 'j', 'A', 'P', 'N', 'Z', 'i',
        'A', 'X', 'j', 'L', 'y', 's', 'K', 'g',
        'p', 'r', 7, 'b']), ['P', 7, 'j', 'A', 'P', 'A', 'j', 'p', 7], "Letters");
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}
