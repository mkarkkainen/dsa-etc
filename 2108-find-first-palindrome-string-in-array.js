//https://leetcode.com/problems/find-first-palindromic-string-in-the-array/description/
/**
 * @param {string[]} words
 * @return {string}
 */

function isPalindrome(s) {
  s = s.replace(/[\W_]/g, "").toLowerCase();
  
  let left = 0;
  let right = s.length - 1;
  
  while(right >= left) {
    if(s[right] !== s[left]) {
      return false;
    }
    right--;
    left++;
  }
  return true;
};

var firstPalindrome = function(words) {
    for(const word of words) {
        if(isPalindrome(word)) {
            return word
        }
    }
    return ""
};
