// There are two ways to create PQs, 
// 1. Inefficient way - using sorting
// 2. Efficient way - using MaxHeap

// Implementing out own heapSort to use in Pqs

// arr=[{value, priority}]
function heapSort(arr){
    // 1. create a maxheap
    let n = arr.length
    for (let i=Math.floor(n/2); i>=0; i--){
        heapifyDown(arr,i,n)
    }
    
    // 2. Sort the maxHeap
    for (let i=0; i<n;i++){
        [arr[0],arr[n-i-1]] = [arr[n-i-1],arr[0]]
        heapifyDown(arr,0,n-i-1)
    }
    console.log(arr)
}
function getLeftIndex(i){
    return 2*i+1
}
function getRightIndex(i){
    return 2*i+2
}
function heapifyDown(arr,i,n){
    let left = getLeftIndex(i)
    let right = getRightIndex(i)
    let largest = i

    if (left < n && arr[left].priority>arr[largest].priority){
        largest = left
    }
    if (right <n && arr[right].priority>arr[largest].priority){
        largest=right
    }
    if(largest!==i){
        [arr[largest],arr[i]] = [arr[i],arr[largest]]
        heapifyDown(arr,largest,n)
    }
}
// Implement priority Queue using Array - O(nlogn) due to sorting
class PriorityQueueUsingArray{
    constructor(){
        this.heap = []
    }
    enqueue(val,priority){
        this.heap.push({val:val, priority:priority})
        heapSort(this.heap)
    }
    dequeue(){
        return this.heap.pop()
    }
    printPq(){
        console.log("The PQ is :- ", this.heap)
    }
}

// Prority Queue using MaxHeap - O(logn)
class PriorityQueueUsingMaxHeap{
    constructor(){
        this.heap = []
    }
    enqueue(val,priority){
        this.heap.push({val:val, priority:priority})
        let lastIndex = this.heap.length-1
        this.heapifyUp(lastIndex)
    }
    dequeue() {
        if (this.heap.length === 0) return null;
        let top = this.heap[0];
        let end = this.heap.pop();
        if (this.heap.length > 0) {
            this.heap[0] = end;
            heapifyDown(this.heap, 0, this.heap.length);
        }
        return top;
    }
    printPq(){
        console.log("The PQ is :- ", this.heap)
    }
    heapifyUp(i){
        while(i>0){
            let parentIndex = Math.floor((i-1)/2)
            if (this.heap[i].priority > this.heap[parentIndex].priority){
                [this.heap[i],this.heap[parentIndex]] =[this.heap[parentIndex],this.heap[i]]
                i = parentIndex
            } else{
                break
            }
        }
    }
}

// let pq = new PriorityQueueUsingArray()
// pq.enqueue("Back Pain",3)
// pq.enqueue("Heart Attack",5)
// pq.enqueue("Fever",1)
// pq.enqueue("Accident",2)
// pq.enqueue("Suregry",4)
// pq.printPq()
// let popped = pq.dequeue()
// console.log(popped)
// pq.printPq()
// popped = pq.dequeue()
// console.log(popped)
// popped = pq.dequeue()
// console.log(popped)
// popped = pq.dequeue()
// console.log(popped)
// pq.printPq()

console.log('---------------------')


let pq = new PriorityQueueUsingMaxHeap()
pq.enqueue("Back Pain",3)
pq.enqueue("Heart Attack",5)
pq.enqueue("Fever",1)
pq.enqueue("Accident",2)
pq.enqueue("Suregry",4)
pq.printPq()
let popped = pq.dequeue()
console.log(popped)
pq.printPq()
popped = pq.dequeue()
console.log(popped)
popped = pq.dequeue()
console.log(popped)
popped = pq.dequeue()
console.log(popped)
pq.printPq()