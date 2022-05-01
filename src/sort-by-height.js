const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
 function sortByHeight(arr) {
  let arr_new =Array.from(arr).sort((a, b) => a - b);
  console.log (arr_new);
  for (let i = 0; i < arr_new.length; i++ ){
     if (arr_new[i] == -1) {
       arr_new.splice(i, 1);
       i--;
     } 
  }
  for (let i = 0; i < arr.length; i++ ){
     if (arr[i] == -1) {
       arr_new.splice(i, 0, arr[i]);
     } 
  }
     console.log (arr_new);
  return arr_new
}

module.exports = {
  sortByHeight
};
