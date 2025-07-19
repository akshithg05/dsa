// Recursive solution - time comlexity - O(2^n), space complexity - O(n)
var rob = function(nums) {
    function dfs(i){
        if (i>=nums.length) {
            return 0
        }
        return Math.max(nums[i] + dfs(i+2), dfs(i+1))
    }
    return dfs(0)
};
// Optimized memoized solution - O(n), space complexity - O(n)
var rob = function(nums) {
    memo ={}
    function dfs(i){
        if (i>=nums.length) {
            return 0
        }
        if (memo[i] !== undefined) return memo[i]
        memo[i] =Math.max(nums[i] + dfs(i+2), dfs(i+1))
        return memo[i]
    }
    return dfs(0)
};