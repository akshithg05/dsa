// Brute force approach - sorting time complexity - O(klogk)
// Where k is the length of s1
var checkInclusion = function(s1, s2) {
    s1 = s1.split('').sort().join('')
    
    let i=0
    let j=s1.length

    while(j<=s2.length){
        let sortedS2 = s2.slice(i,j).split('').sort().join('')
        if (sortedS2 === s1){
            return true
        }
        i++
        j++
    }
    return false
};

// 2nd solution with time complexity - O(n*m)
// where n is length of s1 and s2 is length of m
var checkInclusion = function(s1, s2) {
    let freqS1 = Array(26).fill(0)

    for (let i=0; i<s1.length; i++){
        freqS1[s1.charCodeAt(i) - 97]++
    }

    let i=0

    while(i<=s2.length-s1.length){
        let freqS2 = Array(26).fill(0)
        for (let k=i; k<i+s1.length; k++){
            freqS2[s2.charCodeAt(k) - 97]++
        }
        if (isEqual(freqS1,freqS2)) return true
        i++
    }
    return false
};

function isEqual(a,b){
    if (a.length !== b.length){
        return false
    } else{
        for (let i=0; i<a.length;i++){
            if (a[i]!==b[i]) return false
        }
    }
    return true
}

// O(26n) time ~ O(n) and O(26) ~ O(1) space complexity
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