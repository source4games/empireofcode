"use strict";

function listCombination(arr1, arr2) {
    var maxSize = arr1.length>arr2.length?arr1.length:arr2.length;
    console.log(maxSize);
    var ret = [];
    for(i = 0; i<maxSize;i++) {
        if(arr1[i]!==undefined) {
            ret.push(arr1[i]);
        }
        if(arr2[i]!==undefined) {
            ret.push(arr2[i]);
        }
    }
    
    return ret;
}

var assert = require('assert');

if (!global.is_checking) {
    assert.deepEqual(listCombination([1, 2, 3], [4, 5, 6]), [1, 4, 2, 5, 3, 6], "First");
    assert.deepEqual(listCombination([1, 1, 1, 1], [2, 2, 2, 2]), [1, 2, 1, 2, 1, 2, 1, 2], "Second");
    console.log("All set? Click \"Check\" to review your code and earn rewards!");
}
