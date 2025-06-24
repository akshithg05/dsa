// Easy

// My approach - O(m+n) time and O(m+n) space

var mergeTwoLists = function (list1, list2) {
  let curr1 = list1;
  let curr2 = list2;
  let dummy = new ListNode(0);
  let res = dummy;

  while (curr1 || curr2) {
    let val1 = curr1 ? curr1.val : Infinity;
    let val2 = curr2 ? curr2.val : Infinity;

    if (val1 <= val2) {
      res.next = new ListNode(val1);
      res = res.next;
      if (curr1) curr1 = curr1.next;
    } else {
      res.next = new ListNode(val2);
      res = res.next;
      if (curr2) curr2 = curr2.next;
    }
  }
  return dummy.next;
};

// Optimized - Time - O(m+n), space - O(1)
var mergeTwoLists = function (list1, list2) {
  let dummy = new ListNode(0);
  let res = dummy;

  while (list1 && list2) {
    if (list1.val <= list2.val) {
      res.next = list1;
      list1 = list1.next;
    } else {
      res.next = list2;
      list2 = list2.next;
    }
    res = res.next;
  }

  res.next = list1 || list2;
  return dummy.next;
};
