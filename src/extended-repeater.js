const CustomError = require('../extensions/custom-error');

module.exports = function repeater(str, options) {
  if (typeof str !== 'string') String(str);
  if (options.addition && typeof options.addition !== 'string')
    String(options.addition);

  let result = '';
  if (
    options.repeatTimes === undefined &&
    options.additionRepeatTimes === undefined
  ) {
    result = str + options.addition;
  }
  for (let i = 0; i < options.repeatTimes; i++) {
    let resultAddition = '';

    for (let j = 0; j < options.additionRepeatTimes; j++) {
      if (j === options.additionRepeatTimes - 1) {
        resultAddition += options.addition;
      } else {
        resultAddition +=
          options.addition +
          (options.additionSeparator ? options.additionSeparator : '|');
      }
    }

    if (i === options.repeatTimes - 1) {
      result += str + resultAddition;
    } else {
      result +=
        str + resultAddition + (options.separator ? options.separator : '+');
    }
  }

  return result;
};
