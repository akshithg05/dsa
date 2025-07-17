// 1. Brute force solution - time complexity - O(n^2)
// example of worst case when all chars are unique in string, - 'abcdefgh'
function longestSubstringNoRepeatBrute(s){
    let maxLength = 0
    for (let i=0; i<s.length; i++){
        let seen = new Set()
        for (let j=i;j<s.length;j++){
            if(seen.has(s[j])){
                break
            }
            seen.add(s[j])
            maxLength = Math.max(maxLength, j-i+1)
        }
    }
    return maxLength
}

// Optimized solution with O(n) time complexity
// Here max time complexity will be O(2n) as we are moving left as well
// Therefore, total time complexity will be approximately O(n)

function longestSubstringOptimized(s){
    let left = 0
    let maxLength = 0
    let seen = new Set()
    for (let right=0; right<s.length; right++){
        while(seen.has(s[right])){
            seen.delete(s[left])
            left++
        }
        seen.add(s[right])
        maxLength = Math.max(maxLength, right-left+1)
    }
    return maxLength
}

console.log(longestSubstringNoRepeatBrute('abcabcbb'))
console.log(longestSubstringNoRepeatBrute('a'))
console.log('----------------')
console.log(longestSubstringOptimized('abcabcbb'))
console.log(longestSubstringOptimized('a'))