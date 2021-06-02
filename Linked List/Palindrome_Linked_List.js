/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var isPalindrome = function(head) {
    let arr = []
    while(head !== null) {
        arr.push(head.val)
        head = head.next
    }
    if(arr.length < 2) return true;
    let i = 0;
    let j = arr.length - 1
    while(true) {
        if(arr[i] !== arr[j]) return false
        else if((j - i) === 1) break;
        else if((j - i) === 0) break;
        i++; j--;
    }
    return true;
};