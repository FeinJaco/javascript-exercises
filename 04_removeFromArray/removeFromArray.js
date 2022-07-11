const removeFromArray = function(arr, ...inputs) {
    for (item of inputs) {
        let found = arr.indexOf(item);
        if (found >= 0)
            arr.splice(found, 1);
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
