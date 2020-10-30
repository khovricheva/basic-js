const CustomError = require('../extensions/custom-error');

module.exports = function countCats(matrix) {
  let number = 0;
  matrix.forEach((cat) => {
    cat.filter((elem) => {
      if (elem === '^^') number++;
    });
  });
  return number;
};
