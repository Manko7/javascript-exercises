const palindromes = function (string) {
    let temp = [];
    for(let i = 0; i < string.length; i++) {
        ("!" === string[i]) ? "" : temp.append();
        console.log(temp.join().toLowerCase());
    }
    console.log(temp.join().toLowerCase());
    return (temp.join().toLowerCase() === temp.split("").reverse().join("").toLowerCase() ? true : false)
};

// Do not edit below this line
module.exports = palindromes;