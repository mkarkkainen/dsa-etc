//https://leetcode.com/problems/balanced-binary-tree/description/
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
 * @return {boolean}
 */

function checkHeight(node) {
    if (!node) return 0

    const l = checkHeight(node.left)
    const r = checkHeight(node.right)

    if (l === false || r === false || Math.abs(l - r) > 1) {
        return false
    }

    return Math.max(l, r) + 1;
}
var isBalanced = function(root) {
    if (!root) return true
    return checkHeight(root) !== false
};
