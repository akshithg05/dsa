var combine = function(n, k) {
    let res = []
    function dfs(i,k,arr){
        if(arr.length===k){
            res.push(arr)
            return
        }
        if (arr.length + (n - i) < k) return;
        dfs(i+1,k,[...arr,i+1])
        dfs(i+1,k,arr)
    }
    dfs(0,k,[])
    return res
};