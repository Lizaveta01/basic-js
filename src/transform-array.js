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
    if(!Array.isArray(arr)) throw new Error("'arr' parameter must be an instance of the Array!");
    let answer = [];
    for(let i = 0; i<arr.length; i++){
      if (arr[i] === undefined) {
        continue;
      }
      else if (arr[i] === '--discard-next') {
        arr[i + 1] = undefined;
        i++;
        continue;
      }
      else if (arr[i] === '--discard-prev') {
        if (arr[i-2]!='--discard-next')
        answer.pop();
      }
      else if (arr[i] === '--double-next'){      
        if (i < arr.length - 1) arr[i + 1] != undefined ? answer.push(arr[i + 1]):false;
      }
      else if (arr[i] === '--double-prev') {      
        if (i > 0) arr[i - 1] != undefined ? answer.push(arr[i - 1]):false;
      }  
      else answer.push(arr[i])
    }
  
    return answer;
  }
//   let length = arr.length;
// console.log(length);
// if (arr.length == 1) return arr;
 //  throw new NotImplementedError('Not implemented');
//  if (Array.isArray(arr) != true) return Error("\'arr\' parameter must be an instance of the Array!");
//  for (let i = 0; i < arr.length; i++){
//    console.log(arr[i]);
//    if (arr[i] == '--discard-next') {
//      arr.splice(i, 2);
//      console.log ('1');
//      i = 0
    
//    } else if (arr[i] == '--discard-prev'){
//      let lengthN = arr.length;
//      if (lengthN < length) {
//        arr.splice(i, 1);
//      }else {
//      if (i > 0) {
//        arr.splice(i-1, 2);
//      } else {
//        arr.splice(i, 1);
//      } 
//      }
//      console.log ('2');
    
//    } else if (arr[i] == '--double-next'){
//      if (i > 0 && i < arr.length-1) {
//        arr.splice(i, 1,arr[i+1]);
//      } else if (arr[i+1] == 'string') {
//        arr.splice(i, 1);
//      } else {
//        arr.splice(i, 1);
//      }
//      console.log('3')
//    } else if (arr[i] == '--double-prev'){
//      let lengthN = arr.length;
//      console.log(lengthN);
//      console.log(i, arr[i]);
//      if (lengthN < length) {
//        arr.splice(i, 1);
//      }
//      else if (lengthN > length) {
//        arr.splice(i+1, 1, arr[i-1]);
       
//      } else if (lengthN == length){
//        if (i > 0) {
//        arr.splice(i, 1,arr[i-1]);
//      } else {
//        arr.splice(i, 1);
//      }
//      }
//      console.log ('4');
      
//    }
//    console.log(arr);
//  }
//  console.log(arr);
//  return arr


module.exports = {
  transform
};
