// TIme complexity - O(n)
var mergeTwoLists = function (list1, list2) {
  let dummy = new ListNode(0);
  let curr1 = list1;
  let curr2 = list2;
  let curr = dummy;

  while (curr1 && curr2) {
    if (curr1.val <= curr2.val) {
      curr.next = new ListNode(curr1.val);
      curr1 = curr1.next;
    } else {
      curr.next = new ListNode(curr2.val);
      curr2 = curr2.next;
    }
    curr = curr.next;
  }
  if (curr1) {
    curr.next = curr1;
  } else if (curr2) {
    curr.next = curr2;
  }
  return dummy.next;
};
