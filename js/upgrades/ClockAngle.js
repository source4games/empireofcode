"use strict";

function clockAngle(time){
    var hours = time.slice(0,2);
    var minutes = time.slice(3,5);
    
    hours = hours % 12;
  
  var hourMinPart = 0.5 * minutes, // 30 degrees per 60 minutes => 1/2 degree per 1 minute => 0.5 * minute
      hourHourPart = 30 * hours, // 30 degrees per 1 hour => 30 * hour
      minAngle = 6 * minutes, // 360 degrees per 60 minutes => 6 degrees per 1 minute => 6 * minute
      totalAngle = Math.abs(hourMinPart + hourHourPart - minAngle); // absolute difference
      
  if (totalAngle>180) {
      totalAngle = 360-totalAngle;
  }
  console.log(hours+":"+minutes+"   "+totalAngle);
  return  totalAngle;
}

var assert = require('assert');

if (!global.is_checking) {
    // These "asserts" using only for self-checking and not necessary for auto-testing
    assert.equal(clockAngle("02:30"), 105, "02:30");
    assert.equal(clockAngle("13:42"), 159, "13:42");
    assert.equal(clockAngle("01:42"), 159, "01:42");
    assert.equal(clockAngle("01:43"), 153.5, "01:43");
    assert.equal(clockAngle("00:00"), 0, "Zero");
    assert.equal(clockAngle("12:01"), 5.5, "Little later");
    assert.equal(clockAngle("18:00"), 180, "Opposite");
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}

