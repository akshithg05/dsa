// Solution 1 naive
var middleNode = function (head) {
  if (head === null) {
    return;
  }
  let curr = head;
  let len = 0;
  while (curr !== null) {
    curr = curr.next;
    len++;
  }
  let middle = Math.floor(len / 2);
  curr = head;
  for (let i = 0; i < middle; i++) {
    curr = curr.next;
  }
  return curr;
};

// Solution 2 using slow and fast pointers
var middleNode = function (head) {
  let slow = head;
  let fast = head;
  while (fast != null && fast.next != null) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
};
