//leetcode 242. Valid Anagram
//

function validAnagram(s, t) {
    if(s.length !== t.length) return false

    let map = new Array(256).fill(0)

    for(let i = 0; i < s.length; i++) {
        map[s.charCodeAt(i)]++
    }
    for(let i = 0; i < t.length; i++) {
        map[t.charCodeAt(i)]--
    }

    return map.every(num => num === 0)
}

console.log(validAnagram("anagram", "nagaram"))

console.log(validAnagram("rat", "car"))
