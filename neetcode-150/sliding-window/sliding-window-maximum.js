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