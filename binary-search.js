function binarySearch(nums, target) {
    let lo = 0
    let hi = nums.length

    while (lo < hi) {
        const m = Math.floor(lo + (hi - lo)/2)
        if(nums[m] === target) {
            return m
        } else if (nums[m] < target) {
            lo = m + 1
        } else {
            hi = m
        }
    }
    return -1
}

console.log(binarySearch([1,2,3,4,5,6,7], 3))
