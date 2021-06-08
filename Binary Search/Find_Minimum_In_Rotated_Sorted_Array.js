/**
 * Solution 1
 * @param {number[]} nums
 * @return {number}
 */
 var findMin = function(nums) {
    
    let left = 0;
    let right = nums.length - 1;
    
    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        if (nums[mid] > nums[right]) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    return nums[left];
};

/**
 * Solution 2
 * @param {number[]} nums
 * @return {number}
 */
 var findMin = function(nums) {
    if(nums.length === 1) return nums[0]
    let start = 0, end = nums.length-1, mid
    if(nums[end] > nums[0]) return nums[0]
    while(start <= end) {
      mid = ~~((start+end)/2)
      if (nums[mid] > nums[mid+1]) return nums[mid+1]
      if (nums[mid-1] > nums[mid]) return nums[mid]
      nums[mid] > nums[0] ? start = mid + 1 : end = mid - 1
    }
    return -1
};