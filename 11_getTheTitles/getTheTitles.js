const getTheTitles = function() {
    let books = []
    for(var i = 0; i < 3; i++) {
        if(i === 0) {
            continue
        } else if (i === 1) {
            books.push({title: "Book", author: "Name" + i})
        } else {
            books.push({title: "Book" + i, author: "Name" + i})
        }
        console.log(books[i])
    }
    const output = []
    books.map((e) => output.push(e.title))
    return output
};

getTheTitles()



// Do not edit below this line
module.exports = getTheTitles;
