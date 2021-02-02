/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function(arr) {
    // Duplicate Zeroes
    let j;
    for(let i=0; i<arr.length; i=i+j) {
        j = 1
        if(arr[i] === 0) {
            arr.splice(i+1, 0, 0)
            arr.splice(-1, 1)
            j = 2
        }
    }
};