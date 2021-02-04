/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    // Remove Element from Array
    
    let i = 0
    while(i < nums.length) {
        (nums[i] === val) ? nums.splice(i, 1) : i++
    }
    return nums.length
};