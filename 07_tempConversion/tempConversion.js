const ftoc = function(tempInFarenheit) {
  return Math.round(10* (tempInFarenheit - 32) * (5 / 9))/10;
};

const ctof = function(tempInCelsius) {
  return Math.round(10*(tempInCelsius*9/5+32))/10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
