class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

let n1 = new Node(10);
let n2 = new Node(20);
let n3 = new Node(30);
let n4 = new Node(40);
let n5 = new Node(50);

n1.next = n2;
n2.next = n3;
n3.next = n4;
n4.next = n5;

function printLinkedList(head) {
  let curr = head;
  while (curr) {
    process.stdout.write(curr.val + " ");
    curr = curr.next;
  }
  console.log("");
}

function rotateLinkedList(head, k) {
  if (head === null || head.next === null || k === 0) {
    return head;
  }

  let len = 0;
  let curr = head;
  while (curr) {
    len++;
    curr = curr.next;
  }

  k = k % len;

  let slow = head;
  let fast = head;

  for (let i = 0; i < k; i++) {
    fast = fast.next;
  }

  while (fast.next) {
    fast = fast.next;
    slow = slow.next;
  }
  fast.next = head;
  let newHead = slow.next;
  slow.next = null;
  return newHead;
}

printLinkedList(n1);
let res = rotateLinkedList(n1, 13);
printLinkedList(res);
