const CustomError = require('../extensions/custom-error');

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error('It`s not an array!');
  }
  if (arr.length === 0) {
    return arr;
  }

  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case '--discard-prev':
        newArr.pop();
        break;
      case '--double-next':
        if (arr[i + 1] !== undefined) {
          newArr.push(arr[i + 1]);
        }
        break;
      case '--double-prev':
        if (arr[i - 1] !== undefined) {
          newArr.push(arr[i - 1]);
        }
        break;
      case '--discard-next':
        if (arr[i + 2] && arr[i + 2].toString().includes('-prev')) {
          i += 2;
        } else {
          i += 1;
        }
        break;
      default:
        newArr.push(arr[i]);
    }
  }
  return newArr;
};
