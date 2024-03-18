package main

import "fmt"

func BinarySearch(list []int, target int) int {
	lo := 0
	hi := len(list) - 1

	for lo <= hi {
		mid := lo + (hi-lo)/2
		midVal := list[mid]

		if midVal == target {
			return mid // target found
		} else if midVal < target {
			lo = mid + 1 // adjust low end
		} else {
			hi = mid - 1 // adjust high end
		}
	}

	return -1 // Target not found
}

func main() {
	list := []int{1, 2, 3, 4, 5} // Example sorted list
	target := 4                  // Value to search for

	result := BinarySearch(list, target)

	if result != -1 {
		fmt.Printf("Found target %d at index %d.\n", target, result)
	} else {
		fmt.Println("Target not found in the list.")
	}
}
