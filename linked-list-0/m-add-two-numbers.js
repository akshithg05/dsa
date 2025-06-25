class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

function addTwoNumbers(l1, l2) {
  let curr1 = l1;
  let curr2 = l2;
  let carry = 0;
  let dummy = new Node(0);
  let res = dummy;

  while (curr1 || curr2 || carry) {
    let val1 = curr1 ? curr1.val : 0;
    let val2 = curr2 ? curr2.val : 0;
    let summ = val1 + val2 + carry;
    let val = Math.floor(summ % 10);
    carry = Math.floor(summ / 10);

    res.next = new Node(val);
    res = res.next;

    if (curr1) curr1 = curr1.next;
    if (curr2) curr2 = curr2.next;
  }
  return dummy.next;
}
