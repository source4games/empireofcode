"use strict";

function fizzBuzz(i) {
    var fizz = "Fizz", buzz = "Buzz"
  var result = !(i % 3) ? !(i % 5) ? fizz + " " + buzz : fizz : !(i % 5) ? buzz : i;
  return result+"";
}

var assert = require('assert');

if (!global.is_checking) {
    // These "asserts" using only for self-checking and not necessary for auto-testing
    assert.equal(fizzBuzz(15), "Fizz Buzz", "15 is divisible by 3 and 5");
    assert.equal(fizzBuzz(6), "Fizz", "6 is divisible by 3");
    assert.equal(fizzBuzz(5), "Buzz", "5 is divisible by 5");
    assert.equal(fizzBuzz(7), "7", "7 is not divisible by 3 or 5");
    console.log("Earn cool rewards by using the 'Check' button!");
}
