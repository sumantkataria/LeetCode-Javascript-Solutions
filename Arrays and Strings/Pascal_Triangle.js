/**
 * @param {number} numRows
 * @return {number[][]}
 */
 var generate = function(numRows) {
    let output = []
    for(let i = 1; i <= numRows; i++)
    {
      let temp = [], count = 1;
      for(let j = 1; j <= i; j++)
      {
          // The first value in a line is always 1
          temp.push(count);
          count = (count * (i - j)) / j;
      }
      output.push(temp)
    }
    return output
};