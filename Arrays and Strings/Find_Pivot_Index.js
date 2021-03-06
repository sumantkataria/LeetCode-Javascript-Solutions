/**
 * @param {number[]} nums
 * @return {number}
 */
 var pivotIndex = function(nums) {
    let sum = 0, leftSum = 0, i=0
    for(let item of nums) sum += item
    while(i < nums.length) {
      if(leftSum === sum - leftSum - nums[i]) return i
      leftSum += nums[i]
      i++
    }
    return -1
};