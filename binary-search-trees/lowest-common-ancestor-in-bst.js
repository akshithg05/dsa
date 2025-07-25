// Best/average time complexity - O(logn)
// Worst case (in case of skewed trees) - O(n)
var lowestCommonAncestor = function(root, p, q) {
    if (!root) return null;
    const pVal = p.val;
    const qVal = q.val;
    if (pVal < root.val && qVal < root.val) {
        return lowestCommonAncestor(root.left, p, q);
    }
    if (pVal > root.val && qVal > root.val) {
        return lowestCommonAncestor(root.right, p, q);
    }
    return root;
};
