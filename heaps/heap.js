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
    insert(val){
        this.heap.push(val)
        let lastIndex = this.heap.length-1
        this.heapifyUp(lastIndex)
    }
    heapifyUp(i){
        while(i>0){
            let parentIndex = this.getParentIndex(i)
            if (this.heap[parentIndex] > this.heap[i]){
                let temp = this.heap[parentIndex]
                this.heap[parentIndex] = this.heap[i]
                this.heap[i] =temp
                i=parentIndex
            }else{
                break
            }
        }
    }
    printHeap(){
        console.log(this.heap)
    }
}

let minHeap = new MinHeap()
minHeap.printHeap()
minHeap.insert(30)
minHeap.insert(20)
minHeap.insert(15)
minHeap.insert(10)
minHeap.insert(5)
minHeap.printHeap()
minHeap.insert(1)
minHeap.printHeap()