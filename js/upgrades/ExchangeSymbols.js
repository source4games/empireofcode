"use strict";

function symbExchange(str) {
    
  var back,middle,bottom;    
  if (str.lengt == 0) {
    return str;
  }
  else if (str.length== 1) {
    return str;
  }
  else if (str.length== 2) {
    front = str.substring(0,1);
    back = str.substring(1);
    
    return back+front;
  }
  
  front = str.substring(0,1);
  middle = str.substring(1, str.length-1);
  back = str.substring(str.length-1);
  
return back+middle+front;
    
}

var assert = require('assert');

if (!global.is_checking) {
    // These "asserts" using only for self-checking and not necessary for auto-testing
    assert.equal(symbExchange("az"), "za", "1st example");
    assert.equal(symbExchange("aiiiiiz"), "ziiiiia", "2nd example");
    assert.equal(symbExchange("length"), "hengtl", "3nd example");
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}
