const reverseString = function(string) {
    let length = string.length;
    let newString = '';
    for (let i = (length - 1); i >= 0; i--) {
        newString += string.charAt(i);
    }
    return newString;
};

// Do not edit below this line
module.exports = reverseString;
