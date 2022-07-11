const repeatString = function(str, count) {
    return (count >= 0) ? (new Array(count).fill(str)).join("") : "ERROR";
};

// Do not edit below this line
module.exports = repeatString;
