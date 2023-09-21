const repeatString = function(word, num) {
    let answer = ""
    for(let i = 0; i < num; i++) {
        answer = answer + word;
    }
    return (num < 0) ? "ERROR" : answer
};


// Do not edit below this line
module.exports = repeatString;
