// Time complexity - O(n), space - O(1)

function needleHaystack(needle, haystack){
    for (let i = 0 ; i < haystack.length - needle.length ; i++){
        let j=0
        while(j< needle.length && haystack[i+j]===needle[j]){
            j++
        }

        if (j===needle.length){
            return i
        }
    }
    return -1
}

console.log(needleHaystack('sad','sadgwrgerher'))
console.log(needleHaystack('leeto','leetcode'))
