class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// 1. Iterative solution
function swapAdjacentNodes(head) {
  if (head === null || head.next === null) {
    return head;
  }

  let dummy = new Node(0);

  let p = dummy;
  let c = head;
  let n = c.next;

  while (c && c.next) {
    c.next = n.next;
    n.next = c;
    p.next = n;
    p = c;
    c = p.next;
    n = c && c.next;
  }
  return dummy.next;
}

// 2. recursive solution
function swapRec(head){
    if (!head || !head.next){
        return head
    }
    let l = head
    let r = l.next
    l.next = swapRec(r.next)
    r.next = l
    return r
}