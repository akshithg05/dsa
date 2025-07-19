var preorderTraversal = function(root) {
    let res = []
    preOrderHelper(root,res)
    return res    
};

function preOrderHelper(root,res){
    if (root === null){
        return 
    }
    res.push(root.val)
    preOrderHelper(root.left,res)
    preOrderHelper(root.right,res)
}

// Iterative approach to solve the same -
// use stack

var preorderTraversal = function(root) {
    if (!root){
        return []
    }
    let stack =[root]
    let ans=[]
    while (stack.length){
        let curr = stack.pop()
        ans.push(curr.val)
        curr.right && stack.push(curr.right)
        curr.left && stack.push(curr.left)
    }
    return ans
};