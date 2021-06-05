/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
 var guessNumber = function(n) {
    let start = 0, end = n, middle, num
    while(start <= end) {
        middle = ~~((start + end)/2)
        num = guess(middle)
        if (num === -1) {
            end = middle - 1
        } else if(num === 1) {
            start = middle + 1
        } else
            return middle
    }
    return -1
};