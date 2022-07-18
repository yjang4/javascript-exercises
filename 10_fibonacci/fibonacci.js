const fibonacci = function(x) {
    if(x < 0) {
        return "OOPS";
    }
    let prev1 = 1;
    let prev2 = 1;
    let final = 1;
    for(i = 1; i < x - 1; i ++) {
        final = prev1 + prev2;
        prev1 = prev2;
        prev2 = final;
    }
    return final;
};
//fibonacci(3);

// Do not edit below this line
module.exports = fibonacci;
