const sumAll = function(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') return "ERROR";
    let sum = 0;
    let min = Math.min(a,b);
    let max = Math.max(a,b);
    if (min < 0) return "ERROR";
    for (; min <= max; min++)
        sum += min;
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
