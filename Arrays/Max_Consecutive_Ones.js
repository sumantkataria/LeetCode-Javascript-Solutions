/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    // Calculate no. of 1s in the Array
    let counter = 0, output = 0;
    for(let i=0; i<nums.length; ++i) {
        if(nums[i] === 1) {
            ++counter
        } else {
            output = (output === 0) ? counter : (counter > output ? counter : output)
            counter = 0
        }
    }
    output = (counter > output ? counter : output)
    return output
};