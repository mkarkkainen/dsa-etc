//https://leetcode.com/problems/majority-element/
//
// Boyer-Moore Voting Algorithm
// https://en.wikipedia.org/wiki/Boyer%E2%80%93Moore_majority_vote_algorithm
//
// +1 to maj if same num, else -1, if maj gets to zero change res


/**
 * @param {number[]} nums
 * @return {number}
 */

var majorityElement = function(nums) {
    let res = 0;
    let major = 0;

    for (let num of nums) {
        if(major === 0) {
            res = num;
        };

        major += num === res ? 1 : -1;
    };

    return res;
};
