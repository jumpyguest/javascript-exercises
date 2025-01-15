const palindromes = function (string) {
    let array = string.trim().toUpperCase().split('').filter(isLetterNum);

    function isLetterNum(char) {
        return ((char >= 'A' && char <= 'Z') || 
                (char >= '0' && char <= '9'));
    }

    let reversed = array.slice().reverse();
    return array.every((value, index) => value === reversed[index]);
};
// Do not edit below this line
module.exports = palindromes;
