const convertToCelsius = function(value) {
  let celsius = (value - 32) * (5/9);
  return (Math.round(celsius * 10) / 10);
};

const convertToFahrenheit = function(value) {
  let fahr = value*(9/5) + 32;
  return (Math.round(fahr * 10) / 10);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
