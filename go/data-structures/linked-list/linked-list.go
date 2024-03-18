package linkedlist

// Example usage, creating a stack of integers:
// equalsFunc := func(a, b int) bool {
//    return a == b
// }
// myList := NewLinkedList[int](equalsFunc)  

type Node[T any] struct {
    Value T
    Next *Node[T]
}

type LinkedList[T any] struct {
    Head *Node[T]
    Size int
    EqualsFunc func(a, b T) bool // provide an appropriate equalsFunc for your data type
}

func NewLinkedList[T any](equalsFunc func(a, b T) bool) *LinkedList[T] {
    return &LinkedList[T]{EqualsFunc: equalsFunc}
}

func (l *LinkedList[T]) InsertAtStart(value T) *Node[T] {
    newNode := &Node[T]{Value: value, Next: l.Head}
    l.Head = newNode
    l.Size++
    return newNode
}

func (l *LinkedList[T]) InsertAtEnd(value T) *Node[T] {
    newNode := &Node[T]{Value: value}
    if l.Head == nil {
        l.Head = newNode
    } else {
        curr := l.Head
        for curr.Next != nil {
            curr = curr.Next
        }
        curr.Next = newNode
    }
    l.Size++
    return newNode
}

func (l *LinkedList[T]) DeleteValue(value T) bool {
    if l.Head == nil {
        return false
    }
    if l.EqualsFunc(l.Head.Value, value) {
        l.Head = l.Head.Next
        l.Size--
        return true
    }
    curr := l.Head
    for curr.Next != nil {
        if l.EqualsFunc(curr.Next.Value, value) {
            curr.Next = curr.Next.Next
            l.Size--
            return true
        }
        curr = curr.Next
    }
    return false
}

func (l *LinkedList[T]) Search(value T) bool {
    curr := l.Head
    for curr.Next != nil {
        if l.EqualsFunc(curr.Value, value) {
            return true
        }
        curr = curr.Next
    }
    return false
}
