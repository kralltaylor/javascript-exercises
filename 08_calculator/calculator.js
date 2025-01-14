const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
  if (arr.length === 0) {
    return 0;
  }
	const sum = arr.reduce((total, curr) => {
    return total + curr;
  }, 0);
  return sum;
};

const multiply = function(arr) {
  if (arr.length === 0) {
    return 0;
  }
	const product = arr.reduce((total, curr) => {
    return total * curr;
  });
  return product;
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(a) {
  if (a === 0) return 1;
  let factorial = 1;
	for (i = 1; i <= a; i++) {
    factorial *= i;
  }
  return factorial;
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
