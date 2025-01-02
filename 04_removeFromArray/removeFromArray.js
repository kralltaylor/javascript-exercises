const removeFromArray = function(array, ...remove) {
    let newArray = [];
    for (const value of array) {
        if (!remove.includes(value)){
             newArray.push(value);
         }
    }   
    return newArray;

};

// Do not edit below this line
module.exports = removeFromArray;
