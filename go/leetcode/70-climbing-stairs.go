func climbStairs(n int) int {
    a := 0
    b := 1
    c := 0

    for i := 0; i < n; i++ {
        c = a + b
        a = b
        b = c
    }
    return b
}
