package stack

type Stack[T any] struct {
    items []T
}

func NewStack[T any]() *Stack[T] {
    return &Stack[T]{}
}

// Push - adds an item to the top of stack
func (s *Stack[T]) Push(item T) {
    s.items = append(s.items, item)
}

// Pop - remove top item and return it.
// Returns default zero value and false if stack is empty
func (s *Stack[T]) Pop() (T, bool) {
    if len(s.items) == 0 {
        var zero T //default zero value of type T
        return zero, false
    }
    item := s.items[len(s.items)-1] // last item
    s.items = s.items[:len(s.items)-1]  // remove last item
    return item, true
}

// Peek - return top item without removing.
// Returns default zero value and false if stack is empty
func (s *Stack[T]) Peek() (T, bool) {
    if len(s.items) == 0 {
        var zero T
        return zero, false
    }

    item := s.items[len(s.items)-1]
    return item, true
}

// IsEmpty - checks if stack is empty
func (s *Stack[T]) IsEmpty() bool {
    return len(s.items) == 0
}

// Size - returns number of items in stack
func (s *Stack[T]) Size() int {
    return len(s.items)
}
