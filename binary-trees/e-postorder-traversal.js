// Recursive solution

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

// Iterative solution - Using 2 stacks (tricky algorithm)
var postorderTraversal = function(root) {
    if (!root) return []
    let s1 = [root]
    let s2 = []
    while (s1.length>0){
        let curr = s1.pop()
        s2.push(curr)
        curr.left && s1.push(curr.left)
        curr.right && s1.push(curr.right)
    }
    let ans =[]
    while (s2.length>0){
        ans.push(s2.pop().val)
    }
    return ans
};

// Iterative solution using single stack
var postorderTraversal = function(root) {
    let ans =[]
    let stack =[]
    let lastVisted = null
    let curr = root
    while (curr || stack.length){
        while(curr){
            stack.push(curr)
            curr=curr.left
        }
        let peek = stack[stack.length-1]
        if (peek.right && lastVisted !== peek.right){
            curr=peek.right
        } else{
            ans.push(peek.val)
            lastVisted = stack.pop()
        }
    }
    return ans
};