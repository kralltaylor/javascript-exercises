const sumAll = function(num1, num2) {
    if (num1 < 0 || num2 < 0 || !Number.isInteger(num1) || !Number.isInteger(num2)){
        return "ERROR";
    }
    let sum = 0;
    let smallNum, largeNum;
    if (num1 < num2){
        smallNum = num1;
        largeNum = num2;
    } else {
        smallNum = num2;
        largeNum = num1;
    }

    for (i = smallNum; i <= largeNum; i++){
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
