/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    // Squares of a Sorted Array
    let squaredArr = []

    for(let i=0; i<nums.length; i++) {
        squaredArr.push(nums[i]*nums[i])
    }
    for(let i=0; i<squaredArr.length; i++) {
        for(let j=0; j<i; j++) {
            if(squaredArr[i] < squaredArr[j]) {
                [squaredArr[i], squaredArr[j]] = [squaredArr[j], squaredArr[i]]
            }
        }
    }
    return squaredArr
};