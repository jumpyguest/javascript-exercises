const sumAll = function(x, y) {
    let finalSum = 0;
    if (x < 0 || y < 0 || x % 1 != 0 || y % 1 != 0 || typeof x !== 'number' || typeof y !== 'number') {
        return 'ERROR';
    }
    if (y < x) {
        let temp = y;
        y = x;
        x = temp;
    }
    for (let z = x; z <= y; z++) {
            finalSum += z;
    }
    
    return finalSum;
};

// Do not edit below this line
module.exports = sumAll;
