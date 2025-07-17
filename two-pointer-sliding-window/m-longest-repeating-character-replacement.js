var characterReplacement = function(s, k) {
    let i = j = 0
    let map = Array(26).fill(0)
    let maxLength = 0
    map[s.charCodeAt(0)-65] = 1

    while(j<s.length){
        if(isWindowValid(map,k)){
            maxLength = Math.max(maxLength, j-i+1)
            j++
            map[s.charCodeAt(j)-65]++
        }else{
            map[s.charCodeAt(i)-65]--
            i++
        }
    }
    return maxLength
};

function isWindowValid(map,k){
    let totalCount = 0
    let maxCount = 0
    for (let i=0; i<26 ; i++){
        totalCount = totalCount + map[i]
        maxCount = Math.max(maxCount, map[i])
    }
    return totalCount-maxCount <= k
}