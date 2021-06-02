/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
 var removeElements = function(head, val) {
    if(head === null) return head;
    while(head !== null && head.val === val) {
        head = head.next;
    }
    let currentNode = head, newHead = head;
    while(currentNode && currentNode.next) {
        if(currentNode.next.val === val) {
            currentNode.next = currentNode.next.next;
        } else {
            currentNode = currentNode.next;
        }
    }
    return newHead
};