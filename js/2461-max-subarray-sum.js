/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumSubarraySum = function(nums, k) {
    const freqMap = new Map()
    let currSum = maxSum = 0
    let i = 0
    while (i < k) {
        currSum += nums[i]
        freqMap.set(nums[i], (freqMap.get(nums[i]) || 0) + 1)
        i++
    }
    if(freqMap.size === k) {
        maxSum = Math.max(maxSum, currSum)
    }
    while (i < nums.length) {
        currSum -= nums[i - k]
        freqMap.set(nums[i - k], (freqMap.get(nums[i - k]) || 0) - 1)
        if(freqMap.get(nums[i - k]) === 0) {
            freqMap.delete(nums[i - k])
        }
        currSum += nums[i]
        freqMap.set(nums[i], (freqMap.get(nums[i]) || 0) + 1)
        if(freqMap.size === k) {
            maxSum = Math.max(maxSum, currSum)
        }
        i++
    }
    return maxSum
};
