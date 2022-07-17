const repeatString = function(stringToRepeat, numOfRepetition) {
    let result = '';
    for(i = 0; i < numOfRepetition; i ++) {
        result += stringToRepeat;
    }
    if(numOfRepetition < 0) {
        result = 'ERROR';
    }
    return result;
};




// Do not edit below this line
module.exports = repeatString;
