const palindromes = function (x) {
    x = x.replace(/[&\/\\#,+()$~%.'":*?<>{}!]/g, "");
    x = x.replace(/\s/g, '');
    x = x.toUpperCase();
    let firstHalf = '';
    for(i = 0; i < x.length; i ++) {
        firstHalf += x[i];
    }
    let secondHalf = '';
    for(i = x.length - 1; i >= 0; i --) {
        secondHalf += x[i];
    }
    if(firstHalf == secondHalf) return true;
    else return false;
};
// Do not edit below this line
module.exports = palindromes;
