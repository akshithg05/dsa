// Logging to a console
console.log("Hello world");
console.log("DSA first lesson");
console.log(7);
console.log(true);

// Performing operations
const a = 10;
const b = 20;
const sum = a + b;
const product = a * b;
const diff = a - b;
console.log("Sum is :", sum);
console.log("Prod is :", product);
console.log("Difference is :", diff);

// Using let variable
let x = 20;
console.log("Let(x) is", x);
x = 30;
console.log("Let(x) is", x);

// String
const firstName = "Akshith";
const lastName = "Gunasheelan";
console.log(firstName + " " + lastName);

// JS has automatic type casting
console.log("Akshith" + " " + 7);

// array
let arr1 = [2, 4, 5, 6, 7, 10];
console.log(arr1);
console.log(arr1[1] + arr1[4]);

// we can mix arr types
let arr2 = [2, "Akshith", 5, 6, true, [1, 2, 3, 4]];
console.log(arr2[5][3]);

// Objects - key value pairs
let obj = {
  a: 7,
  name: "Akshith",
  arr: [1, 2, 3, 4],
};

console.log(obj);
console.log(obj.a + " " + obj.name);
