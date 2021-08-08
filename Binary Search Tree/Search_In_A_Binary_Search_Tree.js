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
 * @param {number} val
 * @return {TreeNode}
 */
 var searchBST = function(root, val) {
    let output
        if(root === null) return null
        iterateBST(root, val)

        function iterateBST(node, val) {
            if(node !== null && node.val === val) output = node;
            else if(node.right !== null && node.val < val) iterateBST(node.right, val);
            else if(node.left !== null && node.val > val) iterateBST(node.left, val);
            else output = null;
        }
        return output
};