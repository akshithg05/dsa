/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

// This is using hashset
// Time complexity - O(n)
// Space complexity - O(n)
var hasCycle = function (head) {
  if (head === null) {
    return false;
  }
  if (head.next === null) {
    return false;
  }
  let hashSet = new Set();
  let curr = head;
  while (curr != null) {
    if (!hashSet.has(curr)) {
      hashSet.add(curr);
      curr = curr.next;
    } else {
      return true;
    }
  }
  return false;
};
