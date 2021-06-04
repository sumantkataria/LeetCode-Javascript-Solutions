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
 var addTwoNumbers = function(l1, l2) {
    
    let num1 = 0, num2 = 0, count = 0
    while(l1) {
        num1 = num1 + (10 ** count)*(l1.val)
        l1 = l1.next; count++
    }

    count = 0
    while(l2) {
        num2 = num2 + (10 ** count)*(l2.val)
        l2 = l2.next; count++;
    }

    let sum = num1 + num2;
    if(sum === 0) {
        let dummy = new ListNode(0)
        return dummy
    }
    let dummy = new ListNode(-1), head = dummy
    while(sum != 0) {
        let temp = sum % 10;
        sum = parseInt(sum/10)
        let newNode = new ListNode(temp)
        dummy.next = newNode
        dummy = newNode
    }
    return head.next;
};