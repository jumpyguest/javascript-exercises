const repeatString = function(str, num) {
    if (num < 0)
        return 'ERROR';
    let output = '';
    for (let x = 0; x < num; x++) {
        output += str;
    }
    return output;
};
//repeatString('hey', 3);
// Do not edit below this line
module.exports = repeatString;
