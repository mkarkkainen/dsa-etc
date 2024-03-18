package main

import (
    "fmt"
)

func LinearSearch(list []int, target int) int {
    for i, val := range list {
        if val == target {
            return i
        }
    }
    return -1
}

func main() {
    examplelist := []int{1,2,3,4,5,6}
    target := 4

    result := LinearSearch(examplelist, target)

    if result != -1 {
        fmt.Printf("Found target %d at index %d. \n", target, result)
    } else {
        fmt.Printf("Target %d was not found. \n", target)
    }
}
