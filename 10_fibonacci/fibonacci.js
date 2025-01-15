const fibonacci = function(num) {
    let intNum = parseInt(num);
    let sequence = [1];
    let sum = 0;
    if (intNum === 0) {
        return 0;
    } else if (intNum < 0) {
        return "OOPS";
    }
    for(let x = 0; x < intNum-1; x++) {
        //let last = sequence.reduce((sum, item) => sum + item, 0);
        sequence[x+1] = sum + sequence[x];
        sum = sequence[x];
    }   
    return sequence[intNum-1];
};

// Do not edit below this line
module.exports = fibonacci;
