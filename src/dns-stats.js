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
    let res = {};
    for (let i = 0; i < domains.length; i++){
      let arr = '';
      let arrNew = domains[i].split('.');
      console.log(arrNew);
      for (let j = arrNew.length -1; j >= 0; j--){
        arr += '.' + arrNew[j];
         console.log(arrNew[j]);
           console.log(arr);
        res[arr] = typeof res[arr] === 'number' ? res[arr] +1 : 1
      }
    }
    console.log(res);
    return res
  }

module.exports = {
  getDNSStats
};
