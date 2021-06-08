/**
 * @param {number[]} nums
 * @return {number}
 */
 var findPeakElement = function(nums) {
    if(nums.length === 1) return nums[0]
    let start = 0, end = nums.length-1, mid
    if(nums[right] > nums[0]) return nums[0]
    while(start <= end) {
      mid = ~~((start+end)/2)
      if (nums[mid] > nums[mid+1]) return nums[mid+1]
      if (nums[mid-1] > nums[mid]) return nums[mid]
      (nums[mid] > nums[0]) ? start = mid + 1 : end = mid - 1
    }
    return -1
};