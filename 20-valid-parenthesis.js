//https://leetcode.com/problems/valid-parentheses/
/**
 * @param {string} s
 * @return {boolean}
 */

// using switch
var isValidSwitch = function(s) {
  let stack = [];
  for (const ch of s) {
    switch(ch) {
      case "{": stack.push("}");
        break;
      case "[": stack.push("]");
        break;
      case "(": stack.push(")");
        break;
      default: 
        if(ch !== stack.pop()) {
          return false;
        }
    }
  }
  return !stack.length;
};

//for loop
function isValid(str) {

    let stack = [];

    for(let i = 0; i < str.length; i++) {
        if(str[i] === "{" || str[i] === "[" || str[i] === "(") {
            stack.push(str[i])
        } else {
            const current = stack.pop();
            if((current === "(" && str[i] === ")") || (current === "[" && str[i] === "]") || (current === "{" && str[i] === "}")) continue;
            else return false;
        }
    }

    return !stack.length;
}
