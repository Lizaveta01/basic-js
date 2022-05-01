const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  throw new NotImplementedError('Not implemented');
  // for (let i =0; i < letters.length; i++){
    domains.reduce((acc, el) => {
    acc[el] = (acc[el] || 0) + 1;
      console.log(acc)
      
    return acc;
  }, {})
}

module.exports = {
  getDNSStats
};
