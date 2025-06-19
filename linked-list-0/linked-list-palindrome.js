/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

// Time complexity - O(n)
// Space complexity - O(1)

var findReverse = function (head) {
  if (head === null) {
    return false;
  }
  let curr = head;
  let prev = null;
  while (curr !== null) {
    let temp = curr;
    curr = curr.next;
    temp.next = prev;
    prev = temp;
  }
  return prev;
};

var isPalindrome = function (head) {
  // Find the middle of the LL
  let slow = head;
  let fast = head;
  while (fast != null && fast.next != null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // Reverse until middle element
  let tail = findReverse(slow);

  console.log(head);
  console.log(tail);

  // Check palindrome
  let curr1 = head;
  let curr2 = tail;

  while (curr2 !== null) {
    if (curr1.val !== curr2.val) {
      return false;
    }
    curr1 = curr1.next;
    curr2 = curr2.next;
  }
  return true;
};
