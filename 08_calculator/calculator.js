const add = function(a, b) {
	return +a + +b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
  return array.reduce((total, current) =>  total + current, 0);
};

const multiply = function(array) {
  return array.reduce((product, item) => product * item, 1);
};

const power = function(a, b) {
  let product = a;
	for (let x = 1; x < b; x++) {
    product *= a;
  }
  return product;
};

const factorial = function(a) {
  if (a === 0) {
    return 1;
  }
  let product = 1;
	for (let x = 1; x <= a; x++) {
    product *= x;
  }
  return product;
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
