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
 var insertIntoBST = function(root, val) {
    let newNode = new TreeNode(val)
    (root === null) ? root = newNode : insertIterate(root, newNode)
    return root
};

var insertIterate = function (node, newNode) {
    if (node.val > newNode.val && node.left !== null) insertIterate(node.left, newNode);
    else if (node.val < newNode.val && node.right !== null) insertIterate(node.right, newNode);
    else if (node.val > newNode.val) node.left = newNode;
    else if (node.val < newNode.val) node.right = newNode;
};