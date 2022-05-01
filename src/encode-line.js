const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
 function encodeLine(str) {
  let res = [];
  let count = 0;
 let letters = str.split('');

 for( let i = 0; i < letters.length; i++){
   if (letters[i] == letters[i+1] ){
     count += 1;
     
   } else if (letters[i] != letters[i+1] && letters[i] == letters[i-1]) {
     count += 1 ;
     res.push(count,letters[i])
     count = 0;
   } else if (letters[i] != letters[i+1]) {
     res.push(letters[i])
     count = 0;
   }
 }
  res = res.join('')
  console.log(res);
  return res
}

module.exports = {
  encodeLine
};
