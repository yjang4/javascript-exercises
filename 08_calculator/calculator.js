const add = function(x, y) {
	return x + y;
};

const subtract = function(x, y) {
	return x - y;
};

const sum = function(x) {
  let s = 0;
	for(i = 0; i < x.length; i ++) {
    s += x[i];
  }
  return s;
};

const multiply = function(x) {
  let startValue;
  if(x.length > 0)
    startValue = x[0];
  for(i = 1; i < x.length; i ++) {
    startValue *= x[i];
  }
  return startValue;
};

const power = function(x, y) {
	return Math.pow(x, y);
};

const factorial = function(num) {
  if (num < 0) 
        return -1;
  else if (num == 0) 
      return 1;
  else {
    return (num * factorial(num - 1));
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
