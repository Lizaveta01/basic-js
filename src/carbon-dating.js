const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  console.log(MODERN_ACTIVITY);
  if (!(typeof sampleActivity === "string" &&  0 < Number(sampleActivity) && Number(sampleActivity) < MODERN_ACTIVITY)) {
    return false
  }
  let k = Math.log(MODERN_ACTIVITY/sampleActivity);
  let d = 0.693/HALF_LIFE_PERIOD;
  let res =  Math.ceil(k/d);
  console.log(sampleActivity);
  console.log(res);
  return res
  // remove line with error and write your code here
}

module.exports = {
  dateSample
};
