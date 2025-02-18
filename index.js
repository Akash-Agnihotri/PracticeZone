/* // You just need to implement the totalCupcakes function
function totalCupcakes(trayOne, trayTwo) {
  // Return the sum of trayOne and trayTwo
  return "Total Number Of Cupcakes:", trayOne + trayTwo;
}
totalCupcakes(12, 20);
totalCupcakes(2, 20);

// Your code starts here
// You just need to implement the remainingApples function
function remainingApples(totalApples, givenAway) {
  // Return totalApples minus givenAway
  return "Remaining Apples:", totalApples - givenAway;
}
remainingApples(20, 5);
remainingApples(50, 13);
remainingApples(100, 1);

// Please don't remove the code below
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// You just need to implement the checkEvenOdd function
function checkEvenOdd(num) {
  // Return "Even" if num is even, otherwise return "Odd"
  if (num % 2 === 0) {
    return "Even ";
  } else {
    return "Odd ";
  }
}
checkEvenOdd(4);
checkEvenOdd(7);
function findLargest(a, b, c) {
  // Return the largest among a, b, and c
  if (a > b && a > c) {
    return a;
  } else if (b > a && b > c) {
    return b;
  } else {
    return c;
  }
}
findLargest(10, 20, 5);
findLargest(50, 30, 40);
findLargest(5, 5, 15);

// You just need to implement the checkVotingEligibility function
function checkVotingEligibility(age) {
  if (age >= 18) {
    return "Eligible";
  } else {
    return "Not Eligible";
  }
  // Return "Eligible" if age is 18 or more, otherwise return "Not Eligible"
}
checkVotingEligibility(20);
checkVotingEligibility(16);
checkVotingEligibility(18);

// You just need to implement the calculateGrade function
function calculateGrade(marks) {
  if (marks >= 90) {
    return "A";
  } else if (marks < 90 && marks >= 80) {
    return "B";
  } else if (marks < 80 && marks >= 70) {
    return "C";
  } else if (marks < 70 && marks >= 60) {
    return "D";
  } else {
    return "F";
  }
}
calculateGrade(85);
calculateGrade(45);
calculateGrade(92);
// You just need to implement the isLeapYear function
function isLeapYear(year) {
  if ((year / 4 && year / 100) || year / 400) {
    return " leap year";
  } else {
    return "not a ly";
  }
  // Return "Leap Year" if the year is a leap year, otherwise return "Not a Leap Year"
}
isLeapYear(2020);
isLeapYear(1900);
isLeapYear(2000);

// You just need to implement the trafficLightAction function
function trafficLightAction(color) {
  if (color == "Red") {
    return "Stop";
  } else if (color == "Yellow") {
    return "Slow Down";
  } else {
    return "Go";
  }
  // Return "Stop", "Slow Down", or "Go" based on the traffic light color
}
trafficLightAction("Red");
trafficLightAction("Yellow");
trafficLightAction("green");

// You just need to implement the getDayOfWeek function
function getDayOfWeek(day) {
  if (day === 1) {
    return "Monday";
  } else if (day === 2) {
    return "Tuesday";
  } else if (day === 3) {
    return "Wednesday";
  } else if (day === 4) {
    return "Thursday";
  } else if (day === 5) {
    return "Friday";
  } else if (day === 6) {
    return "Saturday";
  } else if (day === 7) {
    return "Sunday";
  } else {
    return "invalid number";
  }
  // Return the corresponding day of the week based on the input number
}
getDayOfWeek(1);
getDayOfWeek(5);
getDayOfWeek(7);

// You just need to implement the checkNumberType function
function checkNumberType(num) {
  if (num > 0) {
    return "positive";
  } else if (num === 0) {
    return " zero";
  } else {
    return " negative";
  }
}

// Return "Positive", "Negative", or "Zero" based on the input number
checkNumberType(5);
checkNumberType(-3);
checkNumberType(0);

// You just need to implement the convertTemperature function
// You just need to implement the convertTemperature function
function convertTemperature(value, scale) {
  switch (scale) {
    case "f":
      result = value * 1.8 + 32;
      console.log(`${result}°F`);
      break;
    case "c":
      result = (value - 32) / 1.8;
      console.log(`${result}°C`);
      break;
  }

  // Convert temperature based on the scale ("C" to "F" or "F" to "C")
}
convertTemperature(0, "f");
convertTemperature(100, "f");
convertTemperature(32, "c");


// You just need to implement the calculator function
function calculator(num1, num2, operator) {
  switch (operator) {
    case "+":
      reuslt = num1 + num2;
      return reuslt;
      break;
    case "-":
      reuslt = num1 - num2;
      return reuslt;
      break;
    case "*":
      reuslt = num1 * num2;
      return reuslt;
      break;
    case "/":
      reuslt = num1 / num2;
      return reuslt;
      break;

    default:
      return "code not working";
  }
  // Perform basic arithmetic operations using switch case
}
calculator(10, 5, "+");
calculator(10, 5, "-");
calculator(10, 5, "*");
// You just need to implement the distributeGifts function
function distributeGifts(totalGifts, friends) {
  let count = 0;
  // write your code here
  for (let i = 0; i < totalGifts && count < friends; i++) {
    count++;
  }
  return count;
}
distributeGifts(10, 5);
distributeGifts(2, 4);

// You just need to implement the countApples function
function countApples(apples) {
  let count = 0;
  for (i = 0; i < apples; i++) {
    count++;
  }
  return count;
}
countApples(5);
countApples(3);
// console.log("error");
// You just need to implement the countApples function
function countApples(apples) {
  let count = 0;
  for (i = 0; i < apples; i++) {
    count++;
  }
  return count;
}
countApples(5);
countApples(3);

// You just need to implement the countBoxes function
function countBoxes(totalBars, barsPerBox) {
  let count = 0;

  for (let i = barsPerBox; i <= totalBars; i += barsPerBox) {
    count++;
  }

  console.log(count);
}

countBoxes(17, 5);
countBoxes(20, 4);
// You just need to implement the countSteps function
function countSteps(targetSteps) {
  let steptaken = 0;
  for (i = steptaken; i == targetSteps; i++) {}
  return targetSteps;
}
console.log(countSteps(5));

// You just need to implement the workingDays function
function workingDays(days) {
  const day = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  return days.filter((day) => day !== "Saturday" && day !== "Sunday").length;
}
console.log(workingDays(["MOnday", "Tuesday", "Wednesday"]));
// You just need to implement the totalWater function

function totalWater(waterAmounts) {
  let amountofwater = 0;

  for (let i = 0; i < waterAmounts.length; i++) {
    amountofwater += waterAmounts[i];
  }
  console.log(amountofwater);
}
totalWater([1, 2, 3, 4]);
totalWater([1, 2, 3, 4, 5]);

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
// You just need to implement the totalStars function
function totalStars(starLevels) {
  let count = 0;
  for (let i = 0; i < starLevels.lengt; i++) {
    count += Array.isArray(starLevels[i]);
  }
  return count;
}
totalStars[(["*", "*", "*"], ["*", "*"], ["*"])];

let n = 5;
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= i; j++) {
    process.stdout.write("*  "); // Print star without new line
  }
  console.log("\n"); // New line after each row
}
