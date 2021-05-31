/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var hasCycle = function(head) {
    if(head === null) return false;
    let currentNode = head, ptr1 = head, ptr2 = head;
    while(ptr1 !== ptr2) {
        if(ptr2 === null || ptr2.next === null) return false;
        ptr1 = ptr1.next;
        ptr2 = ptr2.next.next;
    }
    return true;
};