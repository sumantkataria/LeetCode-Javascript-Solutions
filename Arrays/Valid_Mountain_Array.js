/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function(arr) {
    // Valid Mountain Array
    let len = arr.length
    if(len >=2) {
      let i = 0
      while (i+1 < len && arr[i] < arr[i+1])
        i++

      if (i == 0 || i == len-1)
        return false
      
      while (i+1 < len && arr[i] > arr[i+1])
        i++

      return i == len-1
    }
    return false
};