// 1. Brute force approach, check for each list element in other list - Time complexity - O(n^2), space - O(1)
// Not implementing brute force here, just explaining

// 2. Using hashmap/ hashset  , Time - O(m+n), space - O(m+n)

var getIntersectionNode = function (headA, headB) {
  let hashSet = new Set();
  let curr = headA;
  while (curr != null) {
    hashSet.add(curr);
    curr = curr.next;
  }
  curr = headB;
  while (curr != null) {
    if (hashSet.has(curr)) {
      return curr;
    } else {
      curr = curr.next;
    }
  }
};

// 3. My own approach - Time complexity O(m+n), space - O(1)
// where m and n are the lengths of LL A and LL B
var getIntersectionNode = function (headA, headB) {
  let lenA = 0;
  let lenB = 0;
  let curr = headA;
  while (curr != null) {
    lenA++;
    curr = curr.next;
  }
  curr = headB;
  while (curr != null) {
    lenB++;
    curr = curr.next;
  }
  let skip = 0;
  let flag = false;
  if (lenA >= lenB) {
    skip = lenA - lenB;
  } else {
    skip = lenB - lenA;
    flag = true;
  }

  let currA = headA;
  let currB = headB;
  if (flag) {
    while (skip > 0) {
      currB = currB.next;
      skip--;
    }
  } else {
    while (skip > 0) {
      currA = currA.next;
      skip--;
    }
  }

  while (currA && currB) {
    if (currA === currB) {
      return currA;
    } else {
      currA = currA.next;
      currB = currB.next;
    }
  }
};
