const findTheOldest = function(value) {
    let currentYear = new Date().getFullYear()
    let oldest = 0
    let count = 0
    // for(p in arr) {
    //     let age = 0
    //     if(p.yearOfDeath) {
    //         console.log(p.yearOfDeath)
    //         console.log(currentYear)
    //         age = p.yearOfDeath - p.yearOfBirth
    //     } else {
    //         console.log(p.yearOfDeath)
    //         console.log(currentYear)
    //         age = currentYear - p.yearOfBirth
    //     }
    //     if (oldest < Number(age)) {
    //         oldest = count;
    //     }
    //     count += 1
    // }
    // return arr[oldest].name
    for(p in value) {
        console.log(p)
        console.log(p.name)
        console.log(p.yearOfDeath)
        console.log(p.yearOfBirth)
    }
};

const people = [
    {
      name: "Carly",
      yearOfBirth: 1942,
      yearOfDeath: 1970,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
    {
      name: "Manko",
      yearOfBirth: 1912,
    },
  ]

findTheOldest(people);







// Do not edit below this line
module.exports = findTheOldest;
