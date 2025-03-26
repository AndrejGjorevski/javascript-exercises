const reverseString = function(inputString) {
    let resultString = "";
    
    for (let i = inputString.length - 1; i >= 0; i--) {
        resultString += inputString[i];
    }

    return resultString;
};

// Do not edit below this line
module.exports = reverseString;
