// Leetcode 226. Invert Binary Tree
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
 * @return {TreeNode}
 */

function invertBinaryTree(root) {
    //basecase
    if(!root) return root

    //flip
    let tmp = root.right
    root.right = root.left
    root.left = tmp

    //call self on left and right
    invertBinaryTree(root.left)
    invertBinaryTree(root.right)

    return root
}
