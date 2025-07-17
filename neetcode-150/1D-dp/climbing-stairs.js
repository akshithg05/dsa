// Brute force solution - O(2^n) time 
// space is O(n) , max depth of call stack
var climbStairs = function(n) {
    function dfs(n){
        if (n<=1){
            return 1
        }
        return dfs(n-1) + dfs(n-2)
    }
    return dfs(n)
};

// 2. memoized solution, time - O(n), space- O(n)
var climbStairs = function(n) {
    let memo={}
    function dfs(n){
        if (n<=1){
            return 1
        }
        if(memo[n]) return memo[n]
        memo[n] = dfs(n-1) + dfs(n-2)
        return memo[n]
    }
    return dfs(n)
};