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
 var isValidBST = function (root) {
    return iterateBST(root, null, null);
};

var iterateBST = function (node, high, low) {
    if(node === null) return true;
    if((low !== null && node.val <= low) || (high !== null && node.val >= high)) return false;
    return iterateBST(node.right, high, node.val) && iterateBST(node.left, node.val, low)
};