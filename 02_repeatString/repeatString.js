const repeatString = function(inputString, num) {
    let resultingString = "";
    if (num === 0) {
        return resultingString;
    } else if (num < 0) {
        resultingString = "ERROR";
        return resultingString;
    } else {
        for (let i = 0; i < num; i++) {
            resultingString += inputString;
        }

        return resultingString;
    }
};

// Do not edit below this line
module.exports = repeatString;
