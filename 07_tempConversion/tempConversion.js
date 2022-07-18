const ftoc = function(fah) {
  return Math.round(((fah - 32) * 5 / 9) * 10) / 10;
};

const ctof = function(celsius) {
  return Math.round((celsius * 1.8 + 32) * 10) / 10;
};
// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
