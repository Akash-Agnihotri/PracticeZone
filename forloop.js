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

let sum1 = 0;
for (let i = 2; i <= 100; i += 2) {
  sum1 += i;
}
console.log(sum1);
console.log("20.Find the sum of digits of a given number using a for loop");

function sumOfDigits(n) {
  if (n == 0) {
    return 0;
  } else {
    return (n % 10) + sumOfDigits(Math.floor(n / 10));
  }
}
console.log(sumOfDigits(123456));

console.log("21.Print all Fibonacci numbers up to n using a for loop");

function fibonacci(n) {
  let ans = [];
  let f1 = 0;
  let f2 = 1;
  ans.push(f1);
  for (let i = 1; i < n; i++) {
    ans.push(f2);
    let next = f1 + f2;
    f1 = f2;
    f2 = next;
  }
  console.log(ans.join(""));
}
let result = fibonacci(7);

console.log(
  "22.Find the Greatest Common Divisor (GCD) of two numbers using a for loop"
);

function gcd(a, b) {
  let minnum = Math.min(a, b);

  console.log(minnum);

  for (let i = minnum; i >= 1; i--) {
    if (a % i == 0 && b % i == 0) {
      console.log(i, "is the gcd");
      break;
    }
  }
}
gcd(36, 60);

console.log(
  "23.Check if a number is an Armstrong number (e.g., 153 = 1³ + 5³ + 3³)"
);

function armstrong(n) {
  let originalNumber = n;
  let count = 0;
  let temp = n;
  while (temp > 0) {
    count++;
    temp = Math.floor(temp / 10);
  }

  let sum = 0;
  temp = n;
  for (; temp > 0; temp = Math.floor(temp / 10)) {
    let lastdigit = temp % 10;
    sum += Math.pow(lastdigit, count);
  }
  return sum === originalNumber;
}
console.log(armstrong(123));
console.log(armstrong(9474));
console.log(armstrong(153));

console.log("24.Convert a decimal number to binary using a for loop");

function decimalToBinary(n) {
  let binary = "";
  for (let i = n; i > 0; i = Math.floor(i / 2)) {
    binary = (i % 2) + binary;
  }
  return binary || 0;
}
console.log(decimalToBinary(25));
console.log(decimalToBinary(10));

console.log(
  "25.Find the Least Common Multiple (LCM) of two numbers using a for loop"
);
function lcm(a, b) {
  let maxnum = Math.max(a, b);

  for (let i = maxnum; ; i++) {
    if (i % a === 0 && i % b === 0) {
      return i;
    }
  }
}
console.log(lcm(36, 60));
console.log(lcm(12, 18));
console.log(lcm(5, 7));
console.log(lcm(8, 14));
console.log(
  "26.Print a multiplication table of a given number using a for loop"
);
function table(number) {
  for (let i = 1; i <= 10; i++) {
    console.log(i * number, "tablbe of ", number);
  }
}
table(5);
table(6);
table(12);

console.log("27.Print all prime numbers from 1 to n");
function primeNumbers(n) {
  for (let i = 2; i <= n; i++) {
    let isprime = true;
    for (let j = 2; j * j <= i; j++) {
      if (i % j === 0) {
        isprime = false;
        break;
      }
    }
    if (isprime) {
      console.log(i);
    }
  }
}
primeNumbers(50);

console.log("28.Find the power of a number x^y using a for loop`");

function pwr(x, y) {
  let result = 1;

  for (let i = 0; i < y; i++) {
    result *= x;
  }
  return result;
}
console.log(pwr(6, 3));

console.log(
  "29.Check if a number is a palindrome using a for loop"
);

function palindrome(n) {
  let str = n.toString();
  let len = str.length;
  for (let i = 0; i < len / 2; i++) {
    if (str[i] !== str[len - 1 - i]) {
      return false;
    }
  }
  return true;
}
console.log(palindrome(123));
console.log(palindrome(12321));
