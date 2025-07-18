// 1. Brute force approach - Time complexity (n*k)
// where n is size of array and k is value of k
// space complexity is O(n-k), for the result array.

var maxSlidingWindow = function(nums, k) {
    let i=0
    let j=k
    let res=[]
    while(j<=nums.length){
        res.push(maxArray(nums.slice(i,j)))
        i++
        j++
    }
    return res
};

function maxArray(arr){
    let max = -Infinity
    for (let i=0; i<arr.length; i++){
        if (arr[i]>max){
            max =arr[i]
        }
    }
    return max
}

// Optimized solution - time O(n), space - O(k)
var maxSlidingWindow = function(nums, k) {
    let i=j=0
    let dq =[]
    let res =[]
    while(j<nums.length){
        while (dq.length>0 && nums[j]>dq[dq.length-1]){
            dq.pop()
        }
        dq.push(nums[j])
        if (j+1 >= k){
            res.push(dq[0])
            if (nums[i]===dq[0]) dq.shift()
            i++
        }
        j++
    }
    return res
};