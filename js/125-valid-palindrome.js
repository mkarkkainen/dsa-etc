//https://leetcode.com/problems/valid-palindrome
/**
 * @param {string} s
 * @return {boolean}
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

console.log(isPalindrome("A man, a plan, a canal: Panama"))
