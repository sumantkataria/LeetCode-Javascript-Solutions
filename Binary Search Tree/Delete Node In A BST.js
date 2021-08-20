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
 * @param {number} key
 * @return {TreeNode}
 */
 var deleteNode = function(root, key) {
    if (root === null) return null
    else if(root.val > key) root.left = deleteNode(root.left, key)
    else if(root.val < key) root.right = deleteNode(root.right, key)
    else {
        if (root.left === null || root.right === null) return (root.left === null ) ? root.right : root.left
        else {
            let inOrderSuccessor = root.right
            while(inOrderSuccessor.left !== null) inOrderSuccessor = inOrderSuccessor.left
            root.val = inOrderSuccessor.val;
            root.right = deleteNode(root.right, inOrderSuccessor.val)
        }
    }
    return root
};