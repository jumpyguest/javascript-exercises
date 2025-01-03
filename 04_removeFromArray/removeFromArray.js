const removeFromArray = function() {
    let arr = Array.from(arguments);
    let finalArray = arr[0];
    for (let x = 1; x < arr.length; x++) {
        for (let y = 0; y < finalArray.length; y++) {
            if (finalArray[y] === arr[x]) {
                finalArray.splice(y,1);
                y--;
            }
        }
    }
    return finalArray;
};

// Do not edit below this line
module.exports = removeFromArray;
