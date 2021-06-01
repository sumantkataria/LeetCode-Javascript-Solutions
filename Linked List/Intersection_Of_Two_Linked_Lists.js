/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
 var getIntersectionNode = function(headA, headB) {
    let lenA = getLength(headA);
    let lenB = getLength(headB);
    let currA = headA, currB = headB;
    if (lenA > lenB) {
        let diff = lenA - lenB;
        while(diff-- > 0) {
            currA = currA.next;
        }
    }
    if (lenB > lenA) {
        let diff = lenB - lenA;
        while(diff-- > 0) {
            currB = currB.next;
        }
    }
    while(currA !== null && currB !== null) {
        if(currA === currB) return currA
        currA = currA.next; currB = currB.next;
    }
    return null;
};

function getLength (node) {
    let len = 0
    while(node !== null) {
        len++
        node = node.next;
    }
    return len
}