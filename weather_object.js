let weatherObject = {
  temperature: 30,
  conditions: "Sunny",
  sunriseTime: "5:00 AM",
  sunsetTime: "6:00 PM",
};
console.log(`Current temperature: ${weatherObject.temperature}`);
console.log(
  `It's ${weatherObject.temperature}°C and ${weatherObject.conditions}. Sunrise at ${weatherObject.sunriseTime}, sunset at ${weatherObject.sunsetTime}.`,
);

// challenge 1
const todaysWeather = {
  temperature: {
    high: 55,
    low: 32,
  },
  conditions: "sunny",
  astronomy: {
    sunrise: "7:43 AM",
    sunset: "5:09 PM",
  },
};

console.log(todaysWeather.temperature.high);
console.log(todaysWeather.temperature.low);
console.log(todaysWeather.conditions);
console.log(todaysWeather.astronomy.sunrise);

console.log(
  `Today is ${todaysWeather.conditions} with a high of ${todaysWeather.temperature.high}°F and a low of ${todaysWeather.temperature.low}°F. Sunrise is at ${todaysWeather.astronomy.sunrise} and sunset is at ${todaysWeather.astronomy.sunset}.`,
);
