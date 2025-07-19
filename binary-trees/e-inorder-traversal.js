// Recursive approach

var inorderTraversal = function(root) {
    let ans =[]
    function inorder(root){
        if (!root) return
        inorder(root.left)
        ans.push(root.val)
        inorder(root.right)
    }
    inorder(root)
    return ans
};

// Iterative approach for inorder traversal

function inorderIterative(root){
    let ans =[]
    let stack =[]
    let curr = root
    while(curr || stack.length){
        while(curr){
            stack.push(curr)
            curr=curr.left
        }
        curr = stack.pop()
        ans.push(curr.val)
        curr=curr.right
    }
    return ans
}