/**
 * @param {number[]} nums
 * @return {number}
 */
 var arrayPairSum = function(nums) {
    if (nums.length === 0) return "";
    nums.sort((a, b) =>  a - b)
    let start = 0, end = 1, result = 0
    while (end <= nums.length - 1) {
      result = result + Math.min(nums[start], nums[end])
      start = start+2; end = end+2;
    }
    return result
};