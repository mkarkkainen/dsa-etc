// 278. First Bad Version - leetcode
/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */

//optimal solution: binary search 
var solution = function(isBadVersion) {
    return function(n) {
        let lo = 1
        let hi = n
        while (lo < hi) {
            const m = Math.floor(lo + (hi-lo)/2)
            if(isBadVersion(m)){
                hi = m
            } else {
                lo = m + 1
            }
        }
        return lo
    }
}

// worse solution: jump by sqrt until true, walk back sqrt and then walk linearly until true. same as two crystal balls problem.
// works but its not great. jump search plus linear search
var badsolution = function(isBadVersion) {
    return function(n) {
        const jump = Math.floor(Math.sqrt(n))
        let i = jump

        for(; i < n; i += jump) {
            if(isBadVersion(i)) {
                break
            }
        }

        i -= jump

        for(let j = 0; j < jump && j < n; j++, i++) {
            if(isBadVersion(i)) {
                return i
            }
        }

        return i
    };
};
