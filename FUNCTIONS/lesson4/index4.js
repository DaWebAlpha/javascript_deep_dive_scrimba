/*
function convertTemperature(celsius, decimalPlaces) {
    // celsius to fahrenheit
  if (!decimalPlaces) {
     decimalPlaces = 1;
  }
  const fahrenheit = celsius * 1.8 + 32;
  return Number(fahrenheit.toFixed(decimalPlaces));
}

console.log(convertTemperature(21));
*/

function convertTemperature(celsius, decimalPlaces = 1) {
    // celsius to fahrenheit
  const fahrenheit = celsius * 1.8 + 32;
  return Number(fahrenheit.toFixed(decimalPlaces));
}

console.log(convertTemperature(21, 0));