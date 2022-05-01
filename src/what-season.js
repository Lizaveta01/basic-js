const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
 function getSeason(date) {
  // throw new NotImplementedError('Not implemented');
  if (!date) return 'Unable to determine the time of year!'
  if(date instanceof Date === false || Object.getOwnPropertyNames(date).length > 0) {
    throw new Error ('Invalid date!');
    }
  let month = date.getMonth() + 1;
    console.log(typeof month);
  console.log(month);
  console.log(date);
  if (3 > month && month >= 0 || month == 12) {
    console.log('winter')
    return 'winter';
  } else if (6 > month && month > 2) {
    console.log('spring')
    return 'spring';
  } else if (9 > month && month > 5) {
    console.log('summer')
    return 'summer';
  } else if (12 > month && month > 8) {
    console.log('fall')
    return 'fall';
  }
  }
  // || Object.getOwnPropertyNames(date).length > 0
module.exports = {
  getSeason
};
