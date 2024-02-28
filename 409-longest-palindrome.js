//https://leetcode.com/problems/longest-palindrome/
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    let res = 0;
    let map = {};

    for (let char of s) {
        map[char] = map[char] ? map[char] + 1 : 1;
        if (map[char] % 2 === 0) res += 2;
    }
    return s.length > res ? res + 1 : res;
};
