/**
 * @param {number[]} nums
 * @return {number}
 */
 var dominantIndex = function(nums) {
    
    let largest = 0, index
    for(let i=0; i<nums.length; i++) {
      if(nums[i] > largest){
        largest = nums[i]; index = i
      }
    }
    for(let i of nums) {
      if(i !== largest && i*2 > largest ) {
        return -1
      }
    }
    return index
};