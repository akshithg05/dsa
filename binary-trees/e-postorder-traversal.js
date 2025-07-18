var postorderTraversal = function(root) {
    let ans =[]
    function postOrder(root){
        if (!root) return
        postOrder(root.left)
        postOrder(root.right)
        ans.push(root.val)
    }
    postOrder(root)
    return ans
};