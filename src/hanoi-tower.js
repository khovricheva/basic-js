const CustomError = require('../extensions/custom-error');

module.exports = function calculateHanoi(diskNumber, turnsSpeed) {
  let turns = 1;
  if (diskNumber > 1) {
    turns = Math.pow(2, diskNumber) - 1;
  }
  let seconds = Math.floor((turns * 3600) / turnsSpeed);
  return {
    turns,
    seconds,
  };
};
