"use strict";

function convert(r, radix) {
    var ret = 0;
    var A = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    for (i = 0; i < r.length; i++) {
        var val = A.indexOf(r[i]);
        if (val>=radix) {
            return -1;
        } 
        ret += val*Math.pow(radix, r.length-i-1);
    }
    return ret;
}

var assert = require('assert');

if (!global.is_checking) {
    // These "asserts" using only for self-checking and not necessary for auto-testing
    assert.equal(convert("AF", 16), 175, "Hex");
    assert.equal(convert("101", 2), 5, "Bin");
    assert.equal(convert("101", 5), 26, "5 base");
    assert.equal(convert("Z", 36), 35, "Z base");
    console.log("All done? Earn rewards by using the 'Check' button!");
}
