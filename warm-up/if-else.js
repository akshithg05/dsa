// Funcions in JS
function printHelloWorld() {
  console.log("Hello world");
}

// function to greet
function greet(name) {
  console.log("Namaste ", name);
}

// add
function add(a, b) {
  return a + b;
}

// multiply
function multiply(a, b) {
  return a * b;
}

// square of a number
function square(a) {
  return a * a;
}

let name1 = "Virat";
printHelloWorld();
greet("Akshith");
greet("Anu");
greet(name1);

let res = add(7, 10);
console.log(res);
res = multiply(7, 10);
console.log(res);
res = square(5);
console.log(res);

// Accept age and decide if person can vote or not

function eligibleToVote(age) {
  if (age < 1) {
    return "Enter valid age";
  } else if (age >= 18) {
    return true;
  }
  return false;
}

// function for odd even check
function isOddEven(number) {
  if (number % 2 == 0) {
    return "Number is even";
  }
  return "Number is odd";
}

let canVote = eligibleToVote(18);
console.log(canVote);
canVote = eligibleToVote(17);
console.log(canVote);
canVote = eligibleToVote(19);
console.log(canVote);
canVote = eligibleToVote(-5);
console.log(canVote);

let oddOrEven = isOddEven(1);
console.log(oddOrEven);
oddOrEven = isOddEven(2);
console.log(oddOrEven);
oddOrEven = isOddEven(3);
console.log(oddOrEven);
oddOrEven = isOddEven(4);
console.log(oddOrEven);
