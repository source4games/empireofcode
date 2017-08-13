"use strict";

function golf(r) {
    var t = 0;
    var A = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    for (i = 0; i < r.length-1; i++) {
        if (A.indexOf(r[i])  > -1) {
            if (r[i+1] >= '1' && r[i+1] <= '9') {
                t += A.indexOf(r[i]) * 9 + parseInt(r[i+1]);
            }
        }
    }
    return t;
}
