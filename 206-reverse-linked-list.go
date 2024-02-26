/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */

func reverseList(head *ListNode) *ListNode {
    var prev *ListNode
    for head != nil {
        next := head.Next
        head.Next = prev
        prev = head
        head = next
    }
    return prev
}

// func reverseList(head *ListNode) *ListNode {
//     var prev *ListNode
//     for head != nil {
//         head.Next, prev, head = prev, head, head.Next
//     }
//     return prev
// }
