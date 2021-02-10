/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    
    // Merge Sorted Array
    if(n>0) {
      let index = 0, diff = nums1.length - n
      while(index < nums2.length) {
        for(let i=0; i<=diff; i++) {
          if(nums1[i] > nums2[index] || i === diff) {
            nums1.splice(i, 0, nums2[index])
            nums1.splice(nums1.length-1, 1)
            index++; diff++
            break
          }
        }
      }
    }
};