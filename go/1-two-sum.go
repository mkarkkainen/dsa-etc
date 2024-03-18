// if sorted:
func twoSumSorted(nums []int, target int) []int {
    if len(nums) <= 1 {
        return []int{}
    }

    var left, right int = 0, len(nums)-1
    for left < right {
        curr := nums[left] + nums[right]

        if curr == target {
            return []int{left, right}
        } else if curr > target {
            right--
        } else {
            left++
        }
    }

    return []int{}
}

//if not sorted:
func twoSum(nums []int, target int) []int {
    s := newSet()

    for i, num := range nums {
        if desired := target - num; s.has(desired) {
            i2 := s.get(desired)
            return []int{i2, i}
        }
        s.add(num, i)
    }
    return []int{}
}

type set struct {
    items map[int]int
}

func newSet() *set {
    return &set{
        items: make(map[int]int),
    }
}

func (s *set) has(i int) bool{
    _, exists := s.items[i]
    return exists
}

func (s *set) add(val, pos int) {
    s.items[val] = pos
}

func (s *set) get(i int) int {
    i, exists := s.items[i]
    if(!exists) {
        return -1
    }

    return i
}

