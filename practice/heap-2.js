class MinHeap {
  constructor(arr = []) {
    this.heap = arr;
  }
  printHeap() {
    console.log(this.heap);
  }
  insert(val) {
    this.heap.push(val);
    this.heapifyUp(this.heap.length - 1);
  }
  heapifyUp(i) {
    while (i > 0) {
      let parent = this.getParent(i);
      if (this.heap[parent] > this.heap[i]) {
        [this.heap[parent], this.heap[i]] = [this.heap[i], this.heap[parent]];
        i = parent;
      } else {
        break;
      }
    }
  }
  extractMin() {
    [this.heap[0], this.heap[this.heap.length - 1]] = [this.heap[this.heap.length - 1], this.heap[0]];
    let popped = this.heap.pop();
    this.heapifyDown(0, this.heap.length);
    return popped;
  }
  heapifyDown(i, n) {
    let left = this.getLeft(i);
    let right = this.getRight(i);
    let smallest = i;

    if (left < n && this.heap[left] < this.heap[smallest]) {
      smallest = left;
    }
    if (right < n && this.heap[right] < this.heap[smallest]) {
      smallest = right;
    }
    if (smallest !== i) {
      [this.heap[smallest], this.heap[i]] = [this.heap[i], this.heap[smallest]];
      this.heapifyDown(smallest, n);
    }
  }
  getParent(i) {
    return Math.floor((i - 1) / 2);
  }
  getLeft(i) {
    return 2 * i + 1;
  }
  getRight(i) {
    return 2 * i + 2;
  }
}

function heapSortAscending(arr) {
  let heap = new MinHeap([...arr]);
  let n = arr.length;
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heap.heapifyDown(i, n);
  }

  for (let i = 0; i < n; i++) {
    arr[i] = heap.extractMin();
  }

  return arr;
}

function heapSortDescending(arr) {
  let heap = new MinHeap(arr);
  let n = arr.length;
  for (let i = arr.length - 1; i >= 0; i--) {
    heap.heapifyDown(i, n);
  }

  for (let i = n - 1; i >= 0; i--) {
    [heap.heap[0], heap.heap[i]] = [heap.heap[i], heap.heap[0]];
    heap.heapifyDown(0, i);
  }
  return arr;
}

let heap = new MinHeap();
heap.printHeap();
heap.insert(2);
heap.insert(3);
heap.insert(5);
heap.insert(6);
heap.insert(7);
heap.insert(4);
heap.insert(1);
heap.printHeap();
console.log(heap.extractMin());
heap.printHeap();
console.log(heap.extractMin());
heap.printHeap();
// console.log(heap.heap[heap.getParent(2)]);

console.log("Heap sort implementation");
console.log(heapSortAscending([5, 4, 3, 2, 1]));
console.log(heapSortDescending([5, 4, 3, 2, 1]));
