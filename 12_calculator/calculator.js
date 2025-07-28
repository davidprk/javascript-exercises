const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((total, curr) => total + curr, 0);
};

const multiply = function(arr) {
  return arr.reduce((total, curr) => total * curr, 1);
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(a) {
	let res = a;
  for (let i = a - 1; i > 1; i--) {
    res *= i;
  }

  if (a > 1) {
    return res;
  }
  else {
    return 1;
  }
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
