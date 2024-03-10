//https://leetcode.com/problems/ransom-note/description

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    if(ransomNote.length > magazine.length) return false

    let map = new Array(256).fill(0)

    for(let i = 0; i < ransomNote.length; i++) {
        map[ransomNote.charCodeAt(i)]++
    }
    for(let i = 0; i < magazine.length; i++) {
        if(map[magazine.charCodeAt(i)] > 0) {
        map[magazine.charCodeAt(i)]--
        }
    }

    return map.every(num => num === 0)

};
