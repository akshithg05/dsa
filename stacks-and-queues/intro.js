// Create a stack in JS

let arr = [];
arr.push(1);
arr.push(2);
arr.push(3);
console.log("Stack: ", arr);
let popped = arr.pop();
console.log("Popped value: ", popped);
console.log("Stack: ", arr);
let top = arr[arr.length - 1];
console.log("Top: ", top);
arr.push(3);
arr.push(4);
arr.push(5);
arr.push(6);
arr.push(7);

console.log("Stack: ", arr);

arr[3]; // Invalid stack operation, do not do this while using stacks, stacks do not support indexing

// Queues

let q = [];
q.push(1);
q.push(2);
q.push(3);
q.push(4);
console.log("The Queue is: ", q);
let pop = q.shift();
console.log("Popped: ", pop);
pop = q.shift();
console.log("Popped: ", pop);
console.log("The Queue is: ", q);

let front = q[0];
console.log("Front of Queue: ", front);

// NEVER DO THIS IN QUEUE
q.pop; // Allowed by JS but not for queuing
q[2]; // Invalid queue operation
