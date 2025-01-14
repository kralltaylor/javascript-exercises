const fibonacci = function(num) {
    let fibCurr = 0;
    let fibNext = 1;
    let fibTemp = 0;
    if (num < 0) return "OOPS";

    for (i = num; i > 0; i--){
        fibTemp = fibCurr + fibNext;
        fibCurr = fibNext;
        fibNext = fibTemp;
    }
    return fibCurr;
};

// Do not edit below this line
module.exports = fibonacci;
