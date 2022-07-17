const sumAll = function(start, end) {
    if(typeof start != "number" || typeof end != "number" ||
        start < 0 || end < 0) {
        return 'ERROR';
    }
    let sum = 0;
    let s = start;
    let e = end;
    if(start > end) {
        s = end;
        e = start;
    }
    for(i = s; i <= e; i ++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
