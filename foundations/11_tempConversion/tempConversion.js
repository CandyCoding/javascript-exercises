const convertToCelsius = function(temperature) {
  let temp = (temperature - 32)*(5/9)
  let rounded = Math.round(temp*10)/10
  return rounded
};

const convertToFahrenheit = function(temperature) {
let tempF= (temperature * (9/5))+32
let roundedF = Math.round (tempF*10)/10
return roundedF
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
