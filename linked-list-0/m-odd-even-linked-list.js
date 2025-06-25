var oddEvenList = function (head) {
  if (head === null) {
    return null;
  }
  let currOdd = head;
  let currEven = (evenHead = head.next);
  while (currOdd && currOdd.next && currEven && currEven.next) {
    currOdd.next = currOdd.next.next;
    currEven.next = currEven.next.next;
    currOdd = currOdd.next;
    currEven = currEven.next;
  }
  currOdd.next = evenHead;
  return head;
};
