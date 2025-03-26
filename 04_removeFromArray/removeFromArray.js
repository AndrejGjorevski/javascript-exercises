const removeFromArray = function(array, ...args) {
    let resArr = [];

    for (let i = 0; i < array.length; i++) {
        let shouldRemove = false;

        for (let j = 0; j < args.length; j++) {
            if (array[i] === args[j]) {
                shouldRemove = true;
                break;
            }
        }

        if (shouldRemove) {
            continue;
        } else {
            resArr.push(array[i]);
        }
    }

    return resArr;
};

// Do not edit below this line
module.exports = removeFromArray;
