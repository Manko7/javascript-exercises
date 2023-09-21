const add = function(x, y) {
  return x + y
};

const subtract = function(x, y) {
  return x - y
};

const sum = function(arr) {
  let sum = 0;
  arr.forEach(item => {
    if(!Number.isInteger(item)) {
      return "ERROR"
    }
    sum += item
  });
  return sum
};

const multiply = function(arr) {
  let sum = 1;
  arr.forEach(item => {
    if(!Number.isInteger(item)) {
      return "ERROR"
    }
    sum *= item
  });
  return sum
};

const power = function(x, y) {
  return x ** y
};

const factorial = function(x) {
    if(x <= 0 || x === 1) {
      return 1;
    }
    let sum = 1;
    for(let i = 1; i < x + 1; i++) {
      sum *= i
    }
    return sum
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
