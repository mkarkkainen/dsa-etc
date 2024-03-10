//https://leetcode.com/problems/valid-anagram/
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

//optimized
var isAnagram = function(s, t) {
    if(s.length !== t.length) return false

    let map = new Array(256).fill(0)

    for (let i = 0; i < s.length; i++) {
        map[s.charCodeAt(i)]++;
    }

    for (let i = 0; i < t.length; i++) {
        map[t.charCodeAt(i)]--;
    }

    return map.every(value => value === 0)
}

// unicode 
// var isAnagram = function(s, t) {
//     if(s.length !== t.length) return false

//     let hash = {}
//     for (let i = 0; i < s.length; i++) {
//         if(hash[s[i]]) {
//             hash[s[i]] += 1
//         } else {
//             hash[s[i]] = 1
//         }
//     }

//     for (let j = 0; j < t.length; j++) {
//         if(!hash[t[j]]) {
//             return false
//         } else {
//             hash[t[j]]--
//         }
//     }
//     return true
// }

// Quick and dirty
// var isAnagram = function(s, t) {
//     s = s.split("").sort().join()
//     t = t.split("").sort().join()
//     return s === t
// };


