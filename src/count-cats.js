const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  if (Array.isArray(matrix)) {
    let counter = 0;
    matrix = matrix.flat();
    for (let i = 0; i < matrix.length; i++) {
      if (matrix[i] === '^^') {
        counter++;
      }
    }
    return counter;
  }
  else throw new CustomError('Not array');
};
