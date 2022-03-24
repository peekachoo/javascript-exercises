const removeFromArray = function(arr) {
    let length = arr.length;
    let num = arguments.length;
    for (let i = 1; i < num; i++) {
        for (let j = 0; j < length; j++) {
            if (arr[j] === arguments[i]) {
                arr.splice(j, 1);
            }
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
