/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

// Time complexity - O(n), space complexity - O(1)
var removeElements = function (head, val) {
  if (head === null) {
    return head;
  }
  let dummyNode = new ListNode(0);
  dummyNode.next = head;

  let curr = dummyNode;
  while (curr && curr.next) {
    if (curr.next.val === val) {
      curr.next = curr.next.next;
    } else {
      curr = curr.next;
    }
  }
  return dummyNode.next;
};
