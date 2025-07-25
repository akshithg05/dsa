// My own implementation , O(logn) time O(h) space
// This is innecesarily complex, can be simplified
var insertIntoBST = function(root, val) {
    let newNode = new TreeNode(val)
    if (!root) return newNode
    let prev = null
    function traversal(root){
        if (!root){
            return null
        }
        prev = root
        if (val>root.val){
            let right = traversal(root.right)
            if (!right){
                return prev
            } else{
                return right
            }
        } else{
            let left = traversal(root.left)
            if (!left){
                return prev
            } else{
                return left
            }
        }
    }
    let join = traversal(root)
    if (join.val < val){
        join.right = newNode
    }else{
        join.left = newNode
    }
    return root
};

// Simplified version
var insertIntoBST = function(root, val) {
    if (!root) {
        let newNode = new TreeNode(val)
        return newNode
    }
    if (val<root.val){
        root.left = insertIntoBST(root.left,val)
    }else{
        root.right = insertIntoBST(root.right,val)
    }
    return root
};