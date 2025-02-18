/* --------------------------------------------------------------------- 1 to 10 ------------------------------------------------------------ */
//
console.log("1. Print numbers from 1 to 10");
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

console.log("2. Print numbers from 10 to 1");
for (let i = 10; i >= 1; i--) {
  console.log(i);
}

console.log("3.Print even numbers from 2 to 20");
for (let i = 2; i <= 20; i++) {
  if (i % 2 == 0) {
    console.log(i);
  } else {
  }
}
console.log("4.Print odd numbers from 1 to 19");

for (let i = 1; i <= 20; i++) {
  if (i % 2 == 1) {
    console.log(i);
  } else {
  }
}
console.log("5.Print first 10 multiples of 5");

for (let i = 0; i <= 10; i++) {
  console.log(5 * i);
}
console.log("6.Print numbers from 1 to 10, but only even numbers");

for (let i = 1; i <= 10; i++) {
  if (i % 2 == 0) {
    console.log(i);
  } else {
  }
}
console.log("7.Print Hello World 5 times");

for (let i = 1; i <= 5; i++) {
  console.log("hello world");
}
console.log("8.Print numbers from 1 to 10 with their squares");

for (let i = 1; i <= 10; i++) {
  console.log(i, i * i);
}
console.log("9.Print numbers from 1 to 10 and mention if they are even or odd");

for (let i = 1; i <= 10; i++) {
  if (i % 2 == 0) {
    console.log(i, "is even");
  } else {
    console.log(i, "is odd");
  }
}
console.log("10.Print the sum of the first 10 natural numbers");
let sum = 0;
for (let i = 1; i <= 10; i++) {
  sum += i;
}
console.log(sum);

/* --------------------------------------------------------------------- 11 to 30 ------------------------------------------------------------ */

console.log("11.Print a 5x5 square of stars (*)");

for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    process.stdout.write("* ");
  }
  console.log("  ");
}

console.log("12.Print a right-angled triangle of stars (*)");
for (let i = 0; i < 5; i++) {
  for (j = 0; j < i; j++) {
    process.stdout.write("* ");
  }
  console.log("  ");
}
console.log("13.Print an inverted right-angled triangle of stars (*)");
for (let i = 0; i < 5; i++) {
  for (j = i; j < 5; j++) {
    process.stdout.write("* ");
  }
  console.log("  ");
}

console.log("14.Print a pyramid of stars (*)");

for (let i = 0; i < 5; i++) {
  for (j = i; j < 4; j++) {
    process.stdout.write("  ");
  }
  for (j = 0; j < i - 1; j++) {
    process.stdout.write("* ");
  }
  for (j = 0; j < i; j++) {
    process.stdout.write("* ");
  }
  console.log("  ");
}

console.log(
  `15.Print numbers from 1 to 50, but for multiples of 3 print "Fizz", for multiples of 5 print "Buzz", and for multiples of both 3 and 5 print "FizzBuzz"`
);
for (i = 1; i <= 50; i++) {
  if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else if (i % 3 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else {
    console.log(i);
  }
}
console.log("16.Reverse a given string using a for loop");
let str = "Hello World";
let newstr = "";
for (i = str.length - 1; i >= 0; i--) {
  newstr += str.charAt(i);
}
console.log(newstr);

console.log("17.Find the factorial of a given number n using a for loop");

let prevvalue = 1;
let n = 5;
for (i = 1; i < n; i++) {
  prevvalue += i * prevvalue;
  // console.log(i);
  console.log(prevvalue);
}

console.log("18.Check if a given number is prime using a for loop");
let num = 10;

for (let i = 0; i < num; i++) {
  if (num % i === 0) {
    console.log("not prime", i);
  } else {
    console.log("prime", i);
  }
}

console.log("19.Find the sum of all even numbers from 1 to 100");

console.log("20.Find the sum of digits of a given number using a for loop");
console.log("21.Print all Fibonacci numbers up to n using a for loop");
console.log(
  "22.Find the Greatest Common Divisor (GCD) of two numbers using a for loop"
);
console.log(
  "23.Check if a number is an Armstrong number (e.g., 153 = 1³ + 5³ + 3³)"
);
console.log("24.Convert a decimal number to binary using a for loop");
console.log(
  "25.Find the Least Common Multiple (LCM) of two numbers using a for loop"
);
console.log(
  "26.Print a multiplication table of a given number using a for loop"
);
function table(number) {
  for (let i = 0; i <= 10; i++) {
    console.log(i * number);
  }
}
table(5);

console.log("27.Print all prime numbers from 1 to n");

console.log("28.Generate Pascal’s Triangle up to n rows using nested loops");
console.log("29.Find the power of a number x^y using a for loop`");
let sqr = "";
for (let i = 0; i <= 10; i++) {
  sqr = i * i;
}
console.log(sqr);

console.log(
  "30.Check if a number is a palindrome (same forward and backward) using a for loop"
);
