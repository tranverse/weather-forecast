import { findMedian, mySort } from "./functions.js";

var highTemperatures = [55, 57, 53, 47, 56, 50];
var lowTemperatures = [33, 30, 29, 35, 31, 32];

// 1. Print the highest temperature to the console.

let highestTemperature = highTemperatures[0];

for (let i = 0; i < highTemperatures.length; i++) {
  if (highestTemperature < highTemperatures[i]) {
    highestTemperature = highTemperatures[i];
  }
}

console.log(`The highest temperature: ${highestTemperature}`);
/*-------------------------------------------------------------------------------------------------------------*/

// 2. Print the lowest temperature to the console.

let lowestTemperature = lowTemperatures[0];

for (let i = 0; i < lowTemperatures.length; i++) {
  if (lowestTemperature > lowTemperatures[i]) {
    lowestTemperature = lowTemperatures[i];
  }
}
console.log(`The lowest temperature: ${lowestTemperature}`);

/*-------------------------------------------------------------------------------------------------------------*/
// 3. What is the average high temperature from the data set?

let avgHighTemperature = 0;

for (let i = 0; i < highTemperatures.length; i++) {
  avgHighTemperature += highTemperatures[i];
}
avgHighTemperature = avgHighTemperature / highTemperatures.length;

console.log(`The average high temperature: ${avgHighTemperature}`);

/*-------------------------------------------------------------------------------------------------------------*/
// 4. What is the average low temperature from the data set?

let avgLowTemperature = 0;

for (let i = 0; i < lowTemperatures.length; i++) {
  avgLowTemperature += lowTemperatures[i];
}

avgLowTemperature = avgLowTemperature / lowTemperatures.length;

console.log(`The average low temperature: ${avgLowTemperature}`);

/*-------------------------------------------------------------------------------------------------------------*/
// 5. What is the median high temperature from the data set?

let sortedHighTemperature = mySort([...highTemperatures]);
let highMedian = findMedian(sortedHighTemperature);
console.log(`The median high temperature: ${highMedian}`);

/*-------------------------------------------------------------------------------------------------------------*/
// 6. What is the median low temperature from the data set?

let sortedLowTemperature = mySort([...lowTemperatures]);
let lowMedian = findMedian(sortedLowTemperature);
console.log(`The median low temperature: ${lowMedian}`);
