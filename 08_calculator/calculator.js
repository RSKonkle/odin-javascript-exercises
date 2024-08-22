const add = function(x, y) {
	return x + y
};

const subtract = function(x, y) {
	return x - y
};

const sum = function(xArray) {
  result = 0
	for (let i = 0; i < xArray.length; i++)
    result += xArray[i];
  return result
};

const multiply = function(xArray) {
  result = 1
  for (let i = 0; i < xArray.length; i++)
    result *= xArray[i];
  return result
};

const power = function(x, y) {
	result = x
  for (let i = 1; i < y; i++)
    result *= x;
  return result
};

const factorial = function(x) {
  if (x < 0)
    return -1;
  else if (x == 1 || x == 0)
    return 1;
  
  else {
    result = x
    for (let i = x - 1; i >= 1; i--)
      result *= i;
    return result;
  };
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
