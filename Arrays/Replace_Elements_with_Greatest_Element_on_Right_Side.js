/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
    
    // Replace Elements with Greatest Element on Right side
    let largest
    for(let i=0; i<arr.length; i++) {
        largest = undefined
        for(let j=i+1; j<arr.length; j++) {
            if(largest === undefined || arr[j] > largest) {
                largest = arr[j]
            }
            if(j === (arr.length - 1)) {
                arr[i] = largest
            }
        }
    }
    arr[arr.length-1] = -1
    return arr
};