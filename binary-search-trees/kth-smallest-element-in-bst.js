// Own solution using extra array to store result.
var kthSmallest = function(root, k) {
    let res=[]
    function traversal(root){
        if (!root) return
        traversal(root.left)
        res.push(root.val)
        traversal(root.right)
    }
    traversal(root)
    return res[k-1]
};

// Space optimized solution without using the extra array
var kthSmallest = function(root, k) {
    let count = 0
    let res = null
    function inorder(root){
        if (!root) return
        inorder(root.left)
        count++
        if (count === k) res = root.val
        inorder(root.right)
    }
    inorder(root)
    return res
};