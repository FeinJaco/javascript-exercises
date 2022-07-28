const add = function(a,b) {
	return a + b;
};

const subtract = function(a,b) {
	return a - b;
};

const sum = function(list) {
  return list.reduce((a,b) => add(a,b), 0);
};

const multiply = function(list) {
  return list.reduce((a,b) => a * b, 1);
};

const power = function(a,b) {
	return a ** b;
};

const factorial = function(n) {
	return [...Array(n).keys()].reduce((a,b)=>a*(b+1), 1);
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
