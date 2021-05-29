/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
 var spiralOrder = function(matrix) {
    let output = []
    let startR = 0, endR = matrix[0].length-1
    let startC = 0, endC = matrix.length-1
    while(startR <= endR && startC <= endC) {
      
      for(let i=startR; i<=endR; i++) {
        output.push(matrix[startC][i])
      }
      startC++
      for(let i=startC; i<=endC; i++) {
        output.push(matrix[i][endR])
      }
      endR--
      if(startR <= endR && startC <= endC) {
        for(let i=endR; i>=startR; i--) {
          output.push(matrix[endC][i])
        }
        endC--
        for(let i=endC; i>=startC; i--) {
          output.push(matrix[i][startR])
        }
        startR++
      }
    }

    return output
};