const fibonacci = function(n) {
    if (n < 0) return "OOPS";
    let history1 = 1;
    let history2 = 1;
    for (let i = 3; i <= n; i++) {
        let newVal = history1 + history2;
        history1 = history2;
        history2 = newVal;
    }
    return history2;
};

// Do not edit below this line
module.exports = fibonacci;
