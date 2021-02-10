/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    // Height Checker
    /**
     * Instertion Sort
     * [5,3,2,1,4]
     * [3,5,2,1,4]
     * [2,3,5,1,4]
     * [1,2,3,5,4]
     * [1,2,3,4,5]
     */
    let clonedHeights = [...heights], diff = 0
    if(heights.length > 1) {
        for(let i=0; i<clonedHeights.length; i++) {
            for(let j=0; j<clonedHeights.length; j++) {
                if(clonedHeights[i] < clonedHeights[j]) {
                    [clonedHeights[i], clonedHeights[j]] = [clonedHeights[j], clonedHeights[i]]
                }
            }
        }
        for(let k=0; k<clonedHeights.length; k++) {
            if(clonedHeights[k] !== heights[k]) {
                diff++
            }
        }
    }
    return diff
};