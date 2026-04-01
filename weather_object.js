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

// challenge 2
var weatherForecast = [
  {
    day: "Today",
    temperature: {
      high: 55,
      low: 32,
    },
    conditions: "sunny",
    astronomy: {
      sunrise: "7:43 AM",
      sunset: "5:09 PM",
    },
  },
  {
    day: "Saturday",
    temperature: {
      high: 50,
      low: 29,
    },
    conditions: "cloudy",
    astronomy: {
      sunrise: "7:44 AM",
      sunset: "5:08 PM",
    },
  },
  {
    day: "Sunday",
    temperature: {
      high: 47,
      low: 35,
    },
    conditions: "chance of rain",
    astronomy: {
      sunrise: "7:45 AM",
      sunset: "5:07 PM",
    },
  },
];

console.log(`Today weather condition: ${weatherForecast[0].conditions}`);
console.log(
  `Saturday's high temperature: ${weatherForecast[1].temperature.high}`,
);
console.log(`Saturday's sunrise time: ${weatherForecast[1].astronomy.sunrise}`);
console.log(`Sunday's conditions: ${weatherForecast[2].conditions}`);
console.log(`Sunday's sunset time: ${weatherForecast[2].astronomy.sunset}`);
console.log(
  `The high on ${weatherForecast[2].day} will be ${weatherForecast[2].temperature.high} and the low will be ${weatherForecast[2].temperature.low}. We're predicting a ${weatherForecast[2].conditions}. The sun will rise at ${weatherForecast[2].astronomy.sunrise} and set at ${weatherForecast[2].astronomy.sunset}.`,
);
