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

// O(n) time and O(26) ~ O(1) space complexity
var checkInclusion = function(s1, s2) {
    let freqS1 = Array(26).fill(0)
    let freqS2 = Array(26).fill(0)
    let i=0
    let j=s1.length-1

    for (let i=0; i<s1.length;i++){
        freqS1[s1.charCodeAt(i)-97]++
    }
    for (let i=0; i<s1.length;i++){
        freqS2[s2.charCodeAt(i)-97]++
    }

    while(j<=s2.length){
        if (isEqual(freqS1,freqS2)){
            return true
        }
        freqS2[s2.charCodeAt(i)-97]--
        i++
        j++
        freqS2[s2.charCodeAt(j)-97]++
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