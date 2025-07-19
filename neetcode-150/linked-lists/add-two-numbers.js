var addTwoNumbers = function(l1, l2) {
    let dummy = new ListNode(0)
    let curr = dummy
    let carry = 0

    while(l1 || l2 ||  carry){
        let num1 = l1 ? l1.val : 0
        let num2 = l2 ? l2.val : 0
        let sum = (num1 + num2 + carry)%10
        carry = Math.floor((num1 + num2 + carry)/10)
        let newNode = new ListNode(sum)
        curr.next = newNode
        curr = curr.next
        l1= l1 && l1.next 
        l2= l2 && l2.next
    }
    return dummy.next
};