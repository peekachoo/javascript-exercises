const sumAll = function(a, b) {
    let sum = 0;
    if (!Number.isInteger(a) || !Number.isInteger(b) || (a < 0) || (b < 0)) {
        return 'ERROR';
    }

    if (a >= b) {
        while (b <= a) {
            sum += b;
            b++;
        }
    } else if (a < b) {
        while (a <= b) {
            sum += a;
            a++;
        }
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
