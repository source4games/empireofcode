"use strict";

function mostDifference() {
    var i = 0;
    var smallest;
    var biggest;
    if (arguments.length==0){
        return 0;
    }
    while (arguments.length>i) {
        console.log(arguments[i]);
        if (smallest == undefined || arguments[i] < smallest) {
            smallest = arguments[i];
        }
        if (biggest == undefined || arguments[i] > biggest) {
            biggest = arguments[i];
        }
        i++;
    }
    console.log("xxx: " + biggest + "-"+smallest);
    return biggest-smallest;
}

var assert = require('assert');

if (!global.is_checking) {
    // These "asserts" using only for self-checking and not necessary for auto-testing
    var almostEqual = function(actual, expected, significantDigits){
        significantDigits = significantDigits || 3;
        var precision =  Math.pow(0.1, significantDigits);
        return Math.abs(expected - actual) < precision;
    };

    assert(almostEqual(mostDifference(1, 2, 3), 2), "3-1=2");
    assert(almostEqual(mostDifference(5, 5), 0), "5-5=0");
    assert(almostEqual(mostDifference(10.2, 2.2, 0.00001, 1.1, 0.5), 10.199), "10.2-(0.00001)=10.19999");
    assert(almostEqual(mostDifference(), 0), "Empty");
    console.log("Use 'Check' to earn sweet rewards!");
}
