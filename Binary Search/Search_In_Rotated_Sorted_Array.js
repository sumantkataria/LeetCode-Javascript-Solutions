/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var search = function(nums, target) {
    let start = 0, end = nums.length - 1, middle
    while(start <= end) {
      middle = ~~((start + end)/2)
      if(nums[middle] === target) {
        return middle
      }
      if(nums[middle] >= nums[start]) {
        if (nums[start] <= target && nums[middle] > target) {
          end = middle - 1;
      }
      else {
          start = middle + 1;
      }
      } else {
        if (nums[end] >= target && nums[middle] < target) {
          start = middle + 1;
        }
        else {
          end = middle - 1;
        }
      }
    }
    return -1
};