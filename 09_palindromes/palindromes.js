
function palindromes(test) {
    let tempEdit = test.replace(/[^a-zA-Z ]/g, "").split(" ").join("").toLowerCase()
    let temp = tempEdit.split("").reverse().join("");
    if (temp === tempEdit) {
        return true
    }
    return false
}

let testa = "A car, a man, a maraca."
let testb = "Rats live on no evil star."
let testc = "Lid off a daffodil."
let testd = "Animal loots foliated detail of stool lamina."
let teste = "A nut for a jar of tuna."

palindromes(testa)
palindromes(testb)
palindromes(testc)
palindromes(testd)
palindromes(teste)

// Do not edit below this line
module.exports = palindromes;