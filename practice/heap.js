class MinHeap{
    constructor(){
        this.heap = []
    }
    getLeftIndex(i){
        return 2*i+1
    }
    getRightIndex(i){
        return 2*i+2
    }
    getParentIndex(i){
        return Math.floor((i-1)/2)
    }
    printHeap(){
        console.log(this.heap)
    }
    insert(val){
        this.heap.push(val)
        let lastIndex = this.heap.length -1
        this.heapifyUp(lastIndex)
    }
    heapifyUp(i){
        while(i>0){
            let parentIndex = this.getParentIndex(i)
            if (this.heap[parentIndex] > this.heap[i]){
                [this.heap[parentIndex],this.heap[i]] = [this.heap[i],this.heap[parentIndex]];
                i = parentIndex
            }else{
                break
            }
        }
    }
    extract(){
        if (this.heap.length < 1) return
        [this.heap[0], this.heap[this.heap.length-1]] = [this.heap[this.heap.length-1],this.heap[0]]
        let min = this.heap.pop()
        this.heapifyDown(0)
        return min
    }
    heapifyDown(i){
        let left = this.getLeftIndex(i)
        let right = this.getRightIndex(i)
        let smallest = i
        let n = this.heap.length

        if (left<n && this.heap[left] < this.heap[smallest]){
            smallest = left
        }
        if (right<n && this.heap[right] < this.heap[smallest]){
            smallest = right
        }
        if (smallest!==i){
            [this.heap[smallest], this.heap[i]] = [this.heap[i],this.heap[smallest]]
            this.heapifyDown(smallest)
        }
    }
}

let minHeap = new MinHeap()
minHeap.printHeap()
minHeap.insert(45)
minHeap.insert(30)
minHeap.insert(20)
minHeap.insert(15)
minHeap.insert(10)
minHeap.insert(5)
minHeap.printHeap()
minHeap.insert(1)
minHeap.printHeap()
minHeap.extract()
minHeap.printHeap()
minHeap.extract()
minHeap.printHeap()
minHeap.extract()
minHeap.printHeap()
minHeap.extract()
minHeap.printHeap()
minHeap.extract()
minHeap.printHeap()
minHeap.extract()
minHeap.printHeap()