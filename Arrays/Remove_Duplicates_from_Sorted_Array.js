/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    
    // Remove Duplicates from Sorted Array
    switch(nums.length) {
        case 0: return 0
        case 1: return 1
        default: for(let i=0; i<nums.length; i++) {
            if(nums[i] === nums[i+1]) {
                nums.splice(i+1, 1)
                --i
            }
        }
    }
    return nums.length
};