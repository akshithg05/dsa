/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    if (!head || head.next === null) return head
    let slow = fast = head
    while(fast && fast.next){
        slow = slow.next
        fast = fast.next.next
    }
    let newHead = slow.next
    slow.next = null

    let second = reverse(newHead)
    let first = head
    
    // merge the 2 lists
    while (second){
        let t1 = first.next
        let t2 = second.next

        first.next = second
        second.next = t1

        first = t1
        second = t2
    }
    return first
    
};

function reverse(head){
    let curr = head
    let prev = null
    while(curr){
        let temp = curr.next
        curr.next = prev
        prev = curr
        curr = temp
    }
    return prev
}