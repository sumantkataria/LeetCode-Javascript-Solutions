/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    // Third Largest Number
    let len = nums.length
    /**
     * Instertion Sort
     * [5,3,1,2,1,4]
     * [3,5,1,2,1,4]
     * [1,3,5,2,1,4]
     * [1,2,3,5,1,4]
     * [1,1,2,3,4,5]
     * Remove Duplicates
     * [1,2,3,4,5]
     */

    for(let i=0; i<len; i++) {
        for(let j=0; j<len; j++) {
            if(nums[i] < nums[j]) {
                [nums[i], nums[j]] = [nums[j],nums[i]]
            }
        }
    }
    for(let k=0; k<nums.length; k++) {
        if(nums[k] === nums[k+1]) {
            nums.splice(k,1)
            --k
        }
    }

    if(nums.length === 1 || nums.length === 2) {
        return nums[nums.length-1]
    } else {
        return nums[nums.length-3]
    }
};