//141. Linked List Cycle - leetcode
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

//two pointers
var hasCycle = function(head) {
    let fast = head
    while(fast !== null && fast.next !== null) {
        head = head.next
        fast = fast.next.next
        if(head === fast) {
            return true
        }
    }
    return false
};

//hash table
var hasCycleH = function(head) {
    let seen = new Set()
    let curr = head
    while(curr !== null) {
        if(seen.has(curr)) {
            return true
        }
        seen.add(curr)
        curr = curr.next
    }
    return false
};
