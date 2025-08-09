class MaxHeap {
  constructor(arr) {
    this.heap = arr;
    this.size = this.heap.length;
    for (let i = Math.floor(this.size / 2); i >= 0; i--) {
      this.heapifyDown(i);
    }
  }
  getLeftIndex(i) {
    return 2 * i + 1;
  }
  getRightIndex(i) {
    return 2 * i + 2;
  }
  getParentIndex(i) {
    return Math.floor((i - 1) / 2);
  }
  heapifyDown(i) {
    let left = this.getLeftIndex(i);
    let right = this.getRightIndex(i);
    let n = this.size;
    let largest = i;

    if (left < n && this.heap[left] > this.heap[largest]) {
      largest = left;
    }
    if (right < n && this.heap[right] > this.heap[largest]) {
      largest = right;
    }

    if (largest !== i) {
      [this.heap[largest], this.heap[i]] = [this.heap[i], this.heap[largest]];
      this.heapifyDown(largest);
    }
  }
  insert(val) {
    this.heap.push(val);
    let lastIndex = this.heap.length - 1;
    this.heapifyUp(lastIndex);
  }
  heapifyUp(i) {
    while (i > 0) {
      let parentIndex = this.getParentIndex(i);
      if (this.heap[parentIndex] < this.heap[i]) {
        [this.heap[parentIndex], this.heap[i]] = [this.heap[i], this.heap[parentIndex]];
        i = parentIndex;
      } else {
        break;
      }
    }
  }
  extract() {
    if (this.heap.length < 1) return;
    [this.heap[0], this.heap[this.heap.length - 1]] = [this.heap[this.heap.length - 1], this.heap[0]];
    let popped = this.heap.pop();
    this.heapifyDown(0);
    return popped;
  }

  printHeap() {
    console.log(this.heap);
  }
}
var lastStoneWeight = function (stones) {
  let heap = new MaxHeap(stones);
  while (heap.heap.length > 1) {
    let s1 = heap.extract();
    let s2 = heap.extract();
    if (s1 !== s2) {
      heap.insert(Math.abs(s1 - s2));
    }
  }
  if (heap.heap.length === 0) {
    return 0;
  } else {
    return heap.heap[0];
  }
};
