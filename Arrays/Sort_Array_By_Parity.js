/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function(A) {
    let j=0
    if(A.length > 1) {
        for(let i=0; i<A.length; i++) {
            if(A[i]%2 === 0) {
                [A[i], A[j]] = [A[j], A[i]]
                j++
            }
        }
    }
    return A
};