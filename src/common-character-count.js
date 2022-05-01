const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
 function getCommonCharacterCount(s1, s2) {
  // throw new NotImplementedError('Not implemented');
  let arr1;
  let arr2;
  let count = 0;
  if (s1.length >= s2.length) {
    arr1 = s1.split('');
    arr2 = s2.split('');
  } else {
   arr1 = s2.split('');
  arr2 = s1.split('');
  }
  console.log(arr1)
  console.log(arr2)
  
  for (let i = 0; i < arr1.length; i++){
if (arr2.includes(arr1[i])){
  arr2.splice(arr1[i],1)
  count ++;
}
  }
console.log(count);
return count
}

module.exports = {
  getCommonCharacterCount
};
