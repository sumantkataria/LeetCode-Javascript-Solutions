/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
 var findDiagonalOrder = function(matrix) {
    if(matrix.length === 0 || matrix[0].length === 0) return []
    
    let rows = matrix.length, columns = matrix[0].length
    let i, j, temp, output = []

    if(rows > 1 && columns > 1) {
      // Calculate diagonals starting from rows
      for(let item=0; item<=rows-1; item++) {
        temp = []
        i = item
        j = 0
        while(i >= 0) {
          if(matrix[i][j] === undefined) break
          (item%2 !== 0) ? temp.push(matrix[i][j]) : output.push(matrix[i][j])
          i = i-1
          j = j+1
        }
        (item%2 !== 0) && temp.reverse() && (output = output.concat(temp))
      }
    
      // Calculate diagonals ending on rows
      for(let item=1; item<=columns-1; item++) {
        temp = []
        i = rows-1
        j = item
        while(j <= columns-1) {
          if(matrix[i][j] === undefined) break
          (item%2 !== 0) ? temp.push(matrix[i][j]) : output.push(matrix[i][j])
          i = i-1
          j = j+1
        }
        (item%2 !== 0) && temp.reverse() && (output = output.concat(temp))
      }
    } else if(rows > columns) {
      for(let item=0; item<rows; item++) {
        output.push(matrix[item][0]);
      }
    } else {
      for(let item=0; item<columns; item++) {
        output.push(matrix[0][item]);
      }
    }
    return output
};