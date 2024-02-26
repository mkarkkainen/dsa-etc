//https://leetcode.com/problems/sequential-digits/
/**
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 */
var sequentialDigits = function(low, high) {
    const range = "123456789";
    let numbers = []

    for (let i = 0; i < range.length; i++) {
        for (let j = i + 1; j <= range.length; j++) {
            const current = parseInt(range.substring(i, j));
            if (current <= high && current >= low) {
                numbers.push(current);
            }
        }
    }
    return numbers.sort((a, b) => a - b);
};
