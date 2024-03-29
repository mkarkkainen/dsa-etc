//Leetcode 1. Two Sum
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let hash = {};

    for(let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if (hash[target - num] !== undefined) {
            return [hash[target - num], i];
        }

        hash[num] = i;
    }
    return [];
};
