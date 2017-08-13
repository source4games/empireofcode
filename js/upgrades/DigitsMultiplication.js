"use strict";
function golf(number) {
    var r = 1;
    var str = ""+number;
    for (i=0;i<str.length;i++){
        if (str[i]>0){
            r *= parseInt(str[i]);
        }
    }
    
    return r;
}
