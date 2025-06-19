class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

let n1 = new Node(5);
let n2 = new Node(10);
let n3 = new Node(15);
let n4 = new Node(20);

n1.next = n2;
n2.next = n3;
n3.next = n4;

let head = n1;

function traversal(head) {
  let curr = head;
  while (curr != null) {
    process.stdout.write(curr.val + " ");
    curr = curr.next;
  }
}

traversal(n1);

function reverse(head) {
  if (head === null) {
    return;
  }
  let prev = null;
  let curr = head;
  while (curr !== null) {
    let temp = curr;
    curr = curr.next;
    temp.next = prev;
    prev = temp;
  }
  return prev;
}

let newHead = reverse(n1);
traversal(newHead);
