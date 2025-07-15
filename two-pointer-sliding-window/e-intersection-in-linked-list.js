// Solution with Time - O(m+n), space O(1)
var getIntersectionNode = function (headA, headB) {
  let curr = headA;
  let c1 = 0;
  while (curr) {
    curr = curr.next;
    c1++;
  }
  curr = headB;
  let c2 = 0;
  while (curr) {
    curr = curr.next;
    c2++;
  }
  let m = Math.abs(c1 - c2);

  let pA = headA;
  let pB = headB;

  if (c1 < c2) {
    while (m > 0) {
      pB = pB.next;
      m--;
    }
  } else {
    while (m > 0) {
      pA = pA.next;
      m--;
    }
  }
  while (pA != pB) {
    pA = pA.next;
    pB = pB.next;
  }
  return pA;
};

// Optimized version of the same solution  - Time - O(m+n), space - O(1)
var getIntersectionNode = function (headA, headB) {
  let pA = headA;
  let pB = headB;

  while (pA != pB) {
    pA = pA === null ? headB : pA.next;
    pB = pB === null ? headA : pB.next;
  }

  return pA;
};
