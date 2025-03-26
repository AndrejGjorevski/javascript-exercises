const convertToCelsius = function (temperature) {
  let temperatureInCelsious = (5 / 9) * (temperature - 32);
  if (!Number.isInteger(temperatureInCelsious)) {
    temperatureInCelsious = parseFloat(temperatureInCelsious.toFixed(1));
  }

  return temperatureInCelsious;
};

const convertToFahrenheit = function (temperature) {
  let temperatureInFahrenheit = (9 / 5) * temperature + 32;
  if (!Number.isInteger(temperatureInFahrenheit)) {
    temperatureInFahrenheit = parseFloat(temperatureInFahrenheit.toFixed(1));
  }

  return temperatureInFahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
