//https://leetcode.com/problems/roman-to-integer/description/
/**
 * @param {string} s
 * @return {number}
 */

var romanToInt = function(s) {
    const map = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
    };

    let result = 0;

    for(let i = 0; i < s.length; i++) {
        const current = map[s[i]];
        const next = map[s[i+1]];

        if(current < next) {
            result += next - current;
            i++;
        } else {
            result += current;
        }
    }

    return result;
}
