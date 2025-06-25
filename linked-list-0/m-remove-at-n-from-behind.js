/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

// My own approach, double pass, O(n) time, space - o(1)
var removeNthFromEnd = function (head, n) {
  let len = 0;
  let curr = head;
  while (curr) {
    len++;
    curr = curr.next;
  }
  let dest = len - n;
  curr = head;
  for (let i = 0; i < dest - 1; i++) {
    curr = curr.next;
  }
  if (len === 1 && n === 1) {
    return null;
  } else if (dest === 0) {
    return curr.next;
  } else if (curr.next) {
    curr.next = curr.next.next;
  }
  return head;
};

// Using dummy node for cleaner code
var removeNthFromEnd = function (head, n) {
  let dummy = new ListNode(0, head);
  let len = 0;
  let curr = head;

  // Step 1: Get total length
  while (curr) {
    len++;
    curr = curr.next;
  }

  // Step 2: Move to the node just before the one to delete
  let dest = len - n;
  curr = dummy;
  for (let i = 0; i < dest; i++) {
    curr = curr.next;
  }

  // Step 3: Delete the node
  curr.next = curr.next.next;

  return dummy.next;
};

// Single pass using 2 pointer approach
var removeNthFromEnd = function (head, n) {
  let dummy = new ListNode(0);
  dummy.next = head;
  let fast = dummy;
  let slow = dummy;
  for (let i = 0; i <= n; i++) {
    fast = fast.next;
  }
  while (fast != null) {
    slow = slow.next;
    fast = fast.next;
  }
  slow.next = slow.next.next;
  return dummy.next;
};
