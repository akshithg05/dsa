// var Node = function (val) {
//   this.val = val;
//   this.next = null;
// };

// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

// let n1 = new Node(5);
// let n2 = new Node(10);
// let n3 = new Node(15);
// n1.next = n2;
// n2.next = n3;

// console.log(n1);

var Node = function (val) {
  this.val = val;
  this.next = null;
};

var MyLinkedList = function () {
  this.head = null;
  this.size = 0;
};

/**
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
  if (index < 0 || index >= this.size) {
    return -1;
  }
  if (this.head === null) {
    return -1;
  }
  let curr = this.head;
  for (let i = 0; i < index; i++) {
    curr = curr.next;
  }
  return curr.val;
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
  let node = new Node(val);
  if (this.head === null) {
    this.head = node;
  } else {
    node.next = this.head;
    this.head = node;
  }
  this.size++;
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
  let newNode = new Node(val);
  if (this.head === null) {
    this.head = newNode;
  } else {
    let curr = this.head;
    while (curr.next !== null) {
      curr = curr.next;
    }
    curr.next = newNode;
  }
  this.size++;
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
  if (index < 0 || index > this.size) {
    return;
  }
  if (index === 0) {
    this.addAtHead(val);
    return;
  }
  if (index === this.size) {
    this.addAtTail(val);
    return;
  }
  let curr = this.head;
  let currInd = 0;
  while (currInd < index - 1) {
    curr = curr.next;
    currInd++;
  }
  let temp = curr.next;
  let newNode = new Node(val);
  curr.next = newNode;
  newNode.next = temp;
  this.size++;
};

/**
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
  if (index < 0 || index >= this.size) {
    return;
  }
  if (this.head === null) {
    return;
  }
  if (index === 0) {
    let temp = this.head;
    this.head = this.head.next;
    this.size--;
    return;
  }
  let curr = this.head;
  for (let i = 0; i < index - 1; i++) {
    curr = curr.next;
  }
  let temp = curr.next;
  curr.next = curr.next.next;
  temp.next = null;
  this.size--;
};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
