//https://leetcode.com/problems/reverse-linked-list/description/
//Leetcode 206. Reverse Linked List
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// iterative method
function reverseList(head) {
    let prev = null
    while(head) {
        [head.next, prev, head] = [prev, head, head.next]
    }
    return prev
}

//iterative without destructuring
function itReverseList(head) {
    let prev = null
    let curr = head
    while(curr) {
        let tmp = curr.next
        curr.next = prev
        prev = curr
        curr = tmp
    }
    return prev
}

// recursive method
function recurseReverseList(head) {
    if(!head || !head.next) return head

    let tmp = recurseReverseList(head.next)
    head.next.next = head
    head.next = null
    return tmp
}


