const CustomError = require('../extensions/custom-error');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  let log2 = 0.693;

  if (
    typeof sampleActivity === 'string' &&
    arguments.length !== 0 &&
    !isNaN(sampleActivity)
  ) {
    let years = Math.ceil(
      Math.log(MODERN_ACTIVITY / parseFloat(sampleActivity)) /
        (log2 / HALF_LIFE_PERIOD)
    );
    if (years >= 0 && isFinite(years)) return years;
  }
  return false;
};
