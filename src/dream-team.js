const CustomError = require('../extensions/custom-error');

module.exports = function createDreamTeam(members) {
  if (Array.isArray(members)) {
    let arr = [];
    members.map((member) => {
      if (typeof member === 'string') {
        arr.push(member.trim().toUpperCase()[0]);
      }
    });
    return arr.sort().join('');
  } else {
    return false;
  }
};
