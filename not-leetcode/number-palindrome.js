//https://leetcode.com/problems/palindrome-number/description/
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let toArray = new String(x).split("")
    let j = toArray.length - 1;
    for(let i = 0; i < toArray.length; i++) {
      if(toArray[i] !== toArray[j]) {
        return false;
      }
      j--;
    }
  return true;
};
