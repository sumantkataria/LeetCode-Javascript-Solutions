/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var mergeTwoLists = function(l1, l2) {
    if(l1 === null && l2 === null) return l1
    else if (l1 === null) return l2
    else if (l2 === null) return l1
    let outNode, outHead
    if(l1.val < l2.val){
        outHead = l1;
        l1 = l1.next
    }
    else {
        outHead = l2;
        l2 = l2.next
    }
    outNode = outHead
    while(l1 !== null || l2 !== null) {
        if((l1 !== null) && (l2 !== null)) {
            if (l1.val >= l2.val) {
                outNode.next = l2;
                outNode = l2;
                l2 = l2.next;
            } else if (l2.val >= l1.val) {
                outNode.next = l1;
                outNode = l1;
                l1 = l1.next;
            }
        } else if(l1 !== null) {
            outNode.next = l1;
            outNode = l1;
            l1 = l1.next;
        } else {
            outNode.next = l2;
            outNode = l2;
            l2 = l2.next;
        }
    }
    return outHead
};