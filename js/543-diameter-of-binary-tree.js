//https://leetcode.com/problems/diameter-of-binary-tree/
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

// DFS - Post Order Traversal - Left, Right, Root
var diameterOfBinaryTree = function(root) {
    let maxD = 0;

    function dfs(node) {
        //Base case
        if (!node) return 0;

        const left = dfs(node.left);
        const right = dfs(node.right);
        const currD = left + right;

        maxD = Math.max(currD, maxD);

        return Math.max(left +1, right +1);

    }

    dfs(root);

    return maxD; 
};
