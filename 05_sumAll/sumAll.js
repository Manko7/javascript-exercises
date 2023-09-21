const sumAll = function(x, y) {
    if (!Number.isInteger(x) || !Number.isInteger(y)) {
        return "ERROR"
    } else if (x < 0 || y < 0) {
        return "ERROR"
    } 
    let sum = 0;
    if(x > y) {
        let temp = x;
        x = y;
        y = temp;
    }
    for(x; x <= y; x++) {
        if(x === y) {
            sum += y;
            break;
        }
        sum += x;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
