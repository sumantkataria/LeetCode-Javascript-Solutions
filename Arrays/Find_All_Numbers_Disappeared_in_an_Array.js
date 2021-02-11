/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    
    // Find All Numbers Disappeared in an Array
    let len = nums.length, counter = 1, output = [], found = false
    if(nums.length > 0) {
      while(counter <= len) {
        for(let i=0; i<len; i++) {
          if(counter === nums[i]) {
            found = true; break;
          }
        }
        (found === false) ? output.push(counter) : found = false
        counter++; 
      }
    }
    return output
};