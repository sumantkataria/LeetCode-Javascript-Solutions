/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var searchRange = function(nums, target) {
    let ans = [-1,-1];
        for (let i=0;i<nums.length;i++) {
            if (nums[i] == target) {
                ans[0] = i;
                ans[1] = i;
                for (let j=nums.length-1;j>=0;j--) {
                    if (nums[j] == target) {
                        ans[1] = j;
                        break;
                    } 
                }
                break;
            }
        }
        return ans;
};