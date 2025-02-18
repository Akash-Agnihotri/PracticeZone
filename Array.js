/* --------------------------PRACTICE  QUESTIONS-------------------------------- */

console.log("1. Create an empty array and add three elements to it.");
let arr = [];
arr.push("Hi", 1, "js");
console.log(arr);
console.log("2. Find the length of an array [10, 20, 30, 40].");
let arr1 = [10, 20, 30, 40];
console.log(arr.length);

console.log(
  "3. Access the first and last element of an array [5, 10, 15, 20]."
);

let arr3 = [5, 10, 15, 20];
console.log(arr3.slice(0, 1));

console.log("4. Convert a string 'hello' into an array of characters.");
let arr4 = "hello";
console.log(Array.from(arr4));

console.log("5. Check if a given value is an array.");
let arr5 = [1, 2, 3];
console.log(Array.isArray(arr5));

console.log("6. Reverse an array [1, 2, 3, 4, 5].");
let arr6 = [1, 2, 3, 4, 5];
arr6.reverse();
console.log(arr6);
console.log(
  "7. Join an array ['apple', 'banana', 'cherry'] into a single string with commas."
);
let arr7 = ["apple", "banana", "cherry"];

console.log(arr7.join());

console.log(
  "8. Remove the last element from an array [100, 200, 300] and print the modified array."
);
let arr8 = [100, 200, 300];
arr8.pop();
console.log(arr8);

console.log(
  "9. Remove the first element from an array [5, 10, 15, 20] and print the modified array."
);
let arr9 = [5, 10, 15, 20];
arr9.shift();
console.log(arr9);

console.log(
  "10. Add an element 'grape' at the end of an array ['apple', 'banana']."
);
let arr10 = ["apple", "banana"];
arr10.push("grape");
console.log(arr10);

console.log(
  "11. Add 'carrot' at the beginning of an array ['potato', 'tomato']."
);
let arr11 = ["potato", "tomato"];
arr11.unshift("carrot");
console.log(arr11);

console.log(
  `"12. Find the index of 'banana' in an array ['apple', 'banana', 'cherry'].`
);
let arr12 = ["apple", "banana", "cherry"];
console.log(arr12.indexOf("banana"));

console.log(
  "13. Check if 'grape' exists in an array ['apple', 'banana', 'cherry']."
);
let arr13 = ["apple", "banana", "cherry"];
console.log(arr13.includes("grape"));

console.log(
  "14. Copy an array [1, 2, 3, 4] into another variable without affecting the original."
);
let arr14 = [1, 2, 3, 4];
let arr14a = arr14.slice();
console.log(arr14a);

console.log("15. Sort an array [30, 10, 50, 20] in ascending order.");
let arr15 = [30, 10, 50, 20];
arr15.sort(function (a, b) {
  return a - b;
});
console.log(arr15);

console.log(
  "16. Sort an array ['zebra', 'apple', 'mango'] in alphabetical order."
);
let arr16 = ["zebra", "apple", "mango"];
arr16.sort();
console.log(arr16);

console.log("17. Convert an array [1, 2, 3, 4, 5] into a string.");

let arr17 = [1, 2, 3, 4, 5];
console.log(arr17.toString());

console.log("18. Merge two arrays [1, 2, 3] and [4, 5, 6].");
let arr18 = [1, 2, 3];
let arr18a = [4, 5, 6];
let arr18c = arr18.concat(arr18a);
console.log(arr18c);

console.log(
  "19. Remove 'orange' from an array ['apple', 'banana', 'orange', 'grape']."
);
let arr19 = ["apple", "banana", "orange", "grape"];
let arr19a = arr19.filter((word) => word != "orange");
console.log(arr19a);

console.log("20. Find the maximum number in an array [10, 25, 30, 5].");

let arr20 = [10, 25, 30, 5];
arr20.sort(function (a, b) {
  return b - a;
});
console.log(arr20.shift());

console.log("21. Find the minimum number in an array [10, 25, 30, 5].");

let arr21 = [10, 25, 30, 5];
arr21.sort(function (a, b) {
  return a - b;
});
console.log(arr21.shift());

console.log("22. Sum all elements of an array [1, 2, 3, 4, 5].");
let arr22 = [1, 2, 3, 4, 5];
let sum = 0;
arr22.forEach((x) => {
  sum += x;
});
console.log(sum);

console.log("23. Filter even numbers from an array [1, 2, 3, 4, 5, 6].");
let arr23 = [1, 2, 3, 4, 5, 6];
let arr23a = arr23.filter((even) => even % 2 == 0);
console.log(arr23a);

console.log(
  "24. Filter names that start with 'J' from ['John', 'Jane', 'Doe', 'Jack']."
);
let arr24 = ["John", "Jane", "Doe", "Jack"];
let arr24a = arr.filter((word) => word == "J");
console.log(arr24a);
console.log(
  "25. Convert an array of numbers [1, 2, 3, 4] into an array of their squares."
);
let arr25 = [1, 2, 3, 4];
let sqr = arr25.map((x) => x * x);
console.log(sqr);
console.log("26. Find the first even number in an array [1, 3, 7, 4, 9, 2].");
let arr26 = [1, 3, 7, 4, 9, 2];
let evenn = arr26.filter((x) => x % 2 == 0);
evenn.pop();
console.log(evenn);

console.log(
  "27. Find the index of the first number greater than 50 in [10, 20, 60, 30]."
);
let arr27 = [10, 20, 60, 30];
let arr27a = arr27.filter((x) => x > 50);
console.log(arr27a);

console.log("28. Flatten an array [[1, 2], [3, 4], [5, 6]].");
let arr28 = [
  [1, 2],
  [3, 4],
  [5, 6],
];
console.log(arr28.flat());

console.log(
  "29. Remove duplicate elements from an array [1, 2, 2, 3, 4, 4, 5]."
);
let arr29 = [1, 2, 2, 3, 4, 4, 5];
let arr29a = arr29.filter((item, index) => arr29.indexOf(item) === index);
console.log(arr29a);

console.log(
  "30. Convert an array of names ['John', 'Jane'] into a string 'John & Jane'."
);
let arr30 = ["John", "Jane"];
console.log(arr30.toString());

console.log("31. Find the second largest number in [10, 20, 30, 40].");

let arr31 = [10, 20, 30, 40];
arr31.sort(function (a, b) {
  return b - a;
});
console.log(arr31.splice(1, 1));
console.log(arr31);
console.log("32. Rotate an array  one position to the right.");
function rotation(arr32, x) {
  for (let i = 0; i < x; i++) {
    arr32.unshift(arr32.pop());
  }
  console.log(arr32);
}
rotation([1, 2, 3, 4], 2);

console.log(
  "33. Find the intersection of two arrays [1, 2, 3, 4] and [3, 4, 5, 6]."
);

let arr33 = [1, 2, 3, 4];
let arr33a = [3, 4, 5, 6];
let arr33c = arr33.filter((item) => arr33a.indexOf(item) !== -1);
console.log(arr33c);

console.log(
  "34. Find the union of two arrays [1, 2, 3] and [3, 4, 5] without duplicates."
);
let arr34 = [1, 2, 3];
let arr34a = [3, 4, 5];
let union = arr34
  .concat(arr34a)
  .filter((value, index, arr) => arr.indexOf(value) === index);
console.log(union);

console.log(
  "35. Check if all numbers in an array [10, 20, 30] are greater than 5."
);
let arr35 = [10, 20, 30];
function gt(arr35a) {
  if (arr35a > 5) {
    console.log("greater than 5");
  } else {
    console.log("not greater");
  }
}
gt(...arr35);

console.log(
  "36. Check if at least one number in [1, 2, 3, 10] is greater than 5."
);
let arr36 = [1, 2, 3, 10];
function gt(arr36a) {
  if (arr36a > 5) {
    console.log("greater than 5");
  } else {
    console.log("not greater");
  }
}
gt(...arr36);
console.log(
  "37. Split an array [1, 2, 3, 4, 5, 6] into two arrays: one for even numbers and one for odd numbers."
);
let arr37 = [1, 2, 3, 4, 5, 6];
let evenarr = [];
let oddarr = [];
for (let i = 0; i < arr37.length; i++) {
  if (arr37[i] % 2 == 0) {
    evenarr.push(arr37[i]);
    console.log(evenarr);
  } else {
    oddarr.push(arr37[i]);
    console.log(oddarr);
  }
}

console.log("38. Create a function to shuffle an array randomly.");
function getRandomElementsArray(length, arr38) {
  return Array.from(
    { length },
    () => arr38[Math.floor(Math.random() * arr38.length)]
  );
}

const arr38 = ["apple", "banana", "cherry", "date"];
const randomElementsArray = getRandomElementsArray(10, arr38);
console.log(randomElementsArray);

console.log(
  "39. Reverse words in an array ['hello', 'world'] to ['world', 'hello']."
);
console.log("40. Find the most frequent element in [1, 2, 2, 3, 3, 3, 4].");

console.log("41. Find all pairs in [1, 2, 3, 4, 5] that sum up to 6.");
console.log(
  "42. Implement a function to chunk an array [1, 2, 3, 4, 5] into smaller subarrays of size 2."
);
console.log(
  "43. Convert an array of objects [{name: 'John'}, {name: 'Jane'}] into ['John', 'Jane']."
);
console.log(
  "44. Implement a deep flatten function for nested arrays [[1, [2, [3, 4]]], 5]."
);
console.log(
  "45. Implement a function to rotate an array [1, 2, 3, 4] k times."
);
console.log(
  "46. Implement a function to check if an array is a palindrome [1, 2, 3, 2, 1]."
);
console.log(
  "47. Implement a function to merge two sorted arrays [1, 3, 5] and [2, 4, 6] into one sorted array."
);
console.log(
  "48. Implement a function to find the missing number in an array [1, 2, 3, 5] (where numbers should be consecutive)."
);
console.log(
  "49. Implement a function that returns the kth smallest element in [7, 10, 4, 3, 20, 15] when k = 3."
);
console.log(
  "50. Implement a function to find the longest increasing subsequence in [10, 22, 9, 33, 21, 50, 41, 60]."
);

/* -------------------------------------COHORT QUESTIONS----------------------------
1) // You just need to implement the addGuest function
function addGuest(guestList, newGuest) {
    // Add the newGuest to guestList and return the updated list
  
    guestList.push(newGuest);
    return(guestList);
  }
  addGuest(["Anirudh", "Mukul"], "Radhika");
  addGuest([], "sahil");
  addGuest(["Piyush","Tejas"]);
  

// 2) You just need to implement the eatCandy function
function eatCandy(candyJar) {
  candyJar.pop();
  return candyJar;
  // Remove the last candy from the jar and return the updated jar
}
eatCandy(["Lollipop", "Gum", "Chocolate"]);
eatCandy(["Mint", "Jellybean"]);
eatCandy(["Toffee"]);

//3 You just need to implement the addPuppy function
function addPuppy(queue, puppyName) {
  queue.unshift(puppyName);
  return queue;
  // Add puppyName at the beginning of queue and return updated queue
}
addPuppy(["Tom", "Jerry", "Spike"], "Max");
addPuppy([], "Buddy");
addPuppy(["Oscar"], "Bella");

//4) You just need to implement the removeStudent function
function removeStudent(bus) {
  bus.shift();
  return bus;
  // Remove the first student and return the updated bus list
}
removeStudent(["John", "Sarah", "Mike", "Emma"]);
removeStudent(["David", "Sophia"]);
removeStudent(["Alice"]);

//5) You just need to implement the sortBooks function
function sortBooks(books) {
  books.sort();

  return books;
  // Sort the books alphabetically and return the updated list
}
sortBooks(["Math", "English", "Science", "History"]);
sortBooks(["Apple", "Banana", "Cherry"]);
sortBooks(["Zebra", "Ant", "Mango"]);

// You just need to implement the filterHealthy function
function filterHealthy(foodList) {
  const newfoodlist = foodList.filter((item) => item != "Burger");

  console.log(newfoodlist);
  return newfoodlist;
  // Remove unhealthy food and return updated list
}
filterHealthy(["Salad", "Burger", "Apple", "Pizza", "Banana"]);
filterHealthy(["Burger", "Fries", "Salad"]);
filterHealthy(["Tomato", "Carrot", "Burger"]);

// You just need to implement the findPhone function
function findPhone(items) {
  let phonefind = items.indexOf("Phone");
  return phonefind;
  // Return the index of "Phone" in the items array
}
findPhone(["Wallet", "Keys", "Phone", "Glasses"]);
findPhone(["Bag", "Shoes", "Hat", "Phone"]);
findPhone(["Phone", "Notebook", "Pen"]);

// You just need to implement the writeLoveLetter function
function writeLoveLetter(message, name) {
  message.unshift(name);
  return message;
  // Add name at the start of the message and return updated array
}
writeLoveLetter(["l", "love", "you"], "Aarav");
writeLoveLetter(["miss", "you"], "Priya");
writeLoveLetter(["am", "so", "proud"], "Kabir");

// You just need to implement the countMovies function
function countMovies(movieList) {
  return movieList.length;

  // Return the number of movies in the movieList
}
countMovies(["Inception", "Avatar", "Titanic"]);
countMovies(["Interstellar", "Gravity", "The Martian"]);
countMovies(["The Godfather", "Pulp Fiction", "Fight Club", "Toy Story"]);
 */
