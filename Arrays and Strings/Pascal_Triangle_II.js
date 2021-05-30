/**
 * @param {number} rowIndex
 * @return {number[]}
 */
 var getRow = function(rowIndex) {
    if(rowIndex < 0) return
    let output = [], count = 1
    for(let i=1; i<=rowIndex+1; i++) {
      output.push(count)
      count = (count * ((rowIndex+1) - i))/i
    }
    return output
};