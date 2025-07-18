// Fully optimized solution - O(n), O(1) space
var checkInclusion = function(s1, s2) {
    let freq1 = Array(26).fill(0)
    let freq2 = Array(26).fill(0)
    for (let i=0; i<s1.length; i++){
        freq1[s1.charCodeAt(i)-97]++
        freq2[s2.charCodeAt(i)-97]++
    }
    let i=0
    let j = s1.length-1
    while(j<s2.length){
        if (isEqual(freq1,freq2)){
            return true
        }else{
            freq2[s2.charCodeAt(i)-97]--
            i++
            j++
            freq2[s2.charCodeAt(j)-97]++
        }
    }
    return false
};

function isEqual(a,b){
    for (let i=0; i<26; i++){
        if (a[i]!==b[i]){
            return false
        }
    }
    return true
}