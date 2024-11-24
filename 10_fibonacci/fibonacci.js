const fibonacci = function(num) {
    if(num < 0) {
        return "OOPS"
    }
    if(num === 0) {
        return 0
    }
    let lastResult = 0
    let previousNum = 1
    for(let i = 0; i < Number(num); i++) {
        const result = lastResult + previousNum
        previousNum = lastResult
        lastResult = result
    }
    return lastResult
};

// Do not edit below this line
module.exports = fibonacci;
