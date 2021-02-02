/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    
    // Numbers with Even numbers of Digits
    let counter = 0, output = 0

    for(let i=0; i<nums.length; i++) {
        let item = nums[i]
        counter = 0
        while(item >= 1) {
            item /= 10
            ++counter
        }
        if(counter%2 === 0 && nums[i] !== 0) {
            ++output
        }
    }
    return output
};