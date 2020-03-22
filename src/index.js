module.exports = function towelSort(matrix) {  
  let towel = [];
  if (matrix === undefined) { return []; };
  for (let i = 0; i < matrix.length; i += 2) {
    for (let k = 0; k < matrix[i].length; k++) {
      towel.push(matrix[i][k])
    };
    if (matrix[i + 1]) {
      for (let k = matrix[i + 1].length - 1; k >= 0; k--) {
        towel.push(matrix[i + 1][k])
      };
    };
  };
  return towel;
}