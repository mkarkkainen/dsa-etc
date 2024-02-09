/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 *
 * Leetcode
 */
var minSubArrayLen = function(target, nums) {
    let result = Number.MAX_VALUE;
    let windowSum = 0;
    let windowStart = 0;
    for(let windowEnd = 0; windowEnd < nums.length; windowEnd++) {
        windowSum += nums[windowEnd];
        while(windowSum >= target) {
            result = Math.min(result, windowEnd - windowStart + 1);
            windowSum -= nums[windowStart];
            windowStart++;
        }
    }
    return result === Number.MAX_VALUE ? 0 : result;
};
