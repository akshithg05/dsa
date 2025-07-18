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