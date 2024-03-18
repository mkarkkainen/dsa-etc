package main

import "fmt"

func BubbleSort(list []int) {
    n := len(list)
    for i := 0; i < n-1; i++ {
        for j := 0; j < n - i - 1; j++ {
            if list[j] > list[j+1] {
                list[j], list[j+1] = list[j+1], list[j]
            }
        }
    }
}


func main() {
    list := []int{76,24,45,95,12,2}
    fmt.Println("Original list:", list)

    BubbleSort(list)
    fmt.Println("Bubble sorted list:", list)
}
