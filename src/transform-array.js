const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
 function transform(arr) {
   throw new NotImplementedError('Not implemented');
  if (Array.isArray(arr) === false) throw new Error("\'arr\' parameter must be an instance of the Array!");
  for (let i = 0; i < arr.length; i++){
    console.log(i);
    console.log(arr[i]);
    if (arr[i] == '--discard-next') {
      arr.splice(i, 2);
      console.log ('1');
      i = 0
     
    } else if (arr[i] == '--discard-prev'){
      if (i > 0) {
        arr.splice(i-2, 2);
      } else {
        arr.splice(i, 1);
      }
      console.log ('2');
     
    } else if (arr[i] == '--double-next'){
      if (i > 0 && i < arr.length-1) {
        arr.splice(i, 1, i+1);
      } else if (arr[i+1] == 'string') {
        arr.splice(i, 1);
      } else {
        arr.splice(i, 1);
      }
      console.log('3')
    } else if (arr[i] == '--double-prev'){
      if (i > 0) {
        arr.splice(i, 1, i-1);
      } else {
        arr.splice(i, 1);
      }
      console.log ('4');
       
    }
    console.log(arr);
  }
  console.log(arr);
  return arr
}


module.exports = {
  transform
};
