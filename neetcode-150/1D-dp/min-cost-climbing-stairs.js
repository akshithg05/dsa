// Recursive solution for the same - time complexity - O(2^n)
var minCostClimbingStairs = function(cost) {
    let n = cost.length
    function dfs(i){
        if (i>=n){
            return 0
        }
        return cost[i] + Math.min(dfs(i+1),dfs(i+2))
    }
    return Math.min(dfs(0),dfs(1))
};

// Optimized solution with O(n) time and space
var minCostClimbingStairs = function(cost) {
    let n = cost.length
    let memo={}
    function dfs(i){
        if (i>=n){
            return 0
        }
        if (memo[i] !== undefined) return memo[i]
        memo[i] =  cost[i] + Math.min(dfs(i+1),dfs(i+2))
        return memo[i]
    }
    return Math.min(dfs(0),dfs(1))
};