// Write function to print 'Hello World' 20 times

function printHelloNumber(n) {
  for (let i = 0; i < n; i++) {
    console.log("Hello world");
  }
}

printHelloNumber(10);

for (let i = 2; i < 9; i = i + 2) {
  console.log("Hello");
}

for (let i = 5; i > 0; i = i - 1) {
  console.log("Hello 2");
}

// This loop never runs
for (let i = 5; i < 4; i = i + 1) {
  console.log("Hello 3");
}

//print all number in array
const arr = [1, 2, 3, 4, 5, 6, 7];

function printAllNumbersArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

function printAllEvenNumbersArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      console.log(arr[i]);
    }
  }
}

printAllNumbersArray(arr);
console.log("#################");
printAllEvenNumbersArray(arr);

// While loop

let i = 0;
while (i < 5) {
  console.log("Hello World");
  i = i + 1;
}
