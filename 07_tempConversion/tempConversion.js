function roundTo1Decimal(number) {
  return Math.round(number * 10) / 10;
}

const convertToCelsius = function (temp) {
  return roundTo1Decimal(((temp - 32) * 5) / 9);
};

const convertToFahrenheit = function (temp) {
  return roundTo1Decimal((temp * 9) / 5 + 32);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
