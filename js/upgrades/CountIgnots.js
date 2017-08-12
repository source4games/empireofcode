"use strict";

function countIngots(report) {
    var arr = report.split(",");
    var sum = 0;
    var temp;
    for(i = 0; i < arr.length; i++) {
        temp = (arr[i].charCodeAt(0) - 65) * 10;
        sum += temp - temp/10 + parseInt(arr[i].slice(1));
    }
    return sum;

}

var assert = require('assert');

if (!global.is_checking) {
    // These "asserts" using only for self-checking and not necessary for auto-testing
    assert.equal(countIngots("A2,B1"), 12, "Two and ten");
    assert.equal(countIngots("A1,A1,A1"), 3, "One, two, three");
    assert.equal(countIngots("Z9,X8,Y7"), 672, "XYZ");
    assert.equal(countIngots("C1,D1,B1,E1,F1"), 140, "Daily");
    console.log("Now that you're finished, hit the 'Check' button to review your code and earn sweet rewards!");
}
