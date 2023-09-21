const removeFromArray = function(arr, ...args) {
    for(const arg of args) {
        for(i in arr) {
            if (arr[i] === arg) {
                let item = arr.indexOf(arr[i])
                arr.splice(item, 1);
            }
        }
    }
    return arr
};

// Do not edit below this line
module.exports = removeFromArray;
