var subsets = function(nums) {
    let res = []
    function dfs(nums,count,arr){
        if (count === nums.length){
            res.push(arr)
            return
        }
        dfs(nums,count+1,[...arr,nums[count]])
        dfs(nums,count+1,arr)
    }
    dfs(nums,0,[])
    return res
};