/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(numbers, target) {
    if (numbers.length === 0) return "";
    let start = 0, end = numbers.length - 1
    while(start < end) {
      const sum = numbers[start] + numbers[end]
      if(sum === target) {
        return [++start, ++end]
      } else if (sum > target) {
        end--
      } else {
        start++
      }
    }
    return -1
};