/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var rotate = function(nums, k) {
    if (nums.length === 0) return "";
    const subArr = nums.splice(nums.length - k, k)
    nums.splice(0, 0, ...subArr)
};