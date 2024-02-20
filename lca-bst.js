/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */

//recursive method
//no need for basecase since its guaranteed that p and q exist
//recurse left or right depending on if root.val is > or < p.val && q.val
var lowestCommonAncestorRecurse = function(root, p, q) {
    if(root.val > p.val && root.val > q.val) {
        return lowestCommonAncestor(root.left, p, q)
    }
    if(root.val < p.val && root.val < q.val) {
        return lowestCommonAncestor(root.right, p, q)
    }
    return root
};

//iterative method
// O(1) and space complexity slightly less heavy since no call stack reliance
var lowestCommonAncestorIterate = function(root, p, q) {
    while(root) {
        if(root.val > p.val && root.val > q.val) {
            root = root.left
        } else if( root.val < p.val && root.val < q.val) {
            root = root.right
        } else {
            return root
        }
    }
};
