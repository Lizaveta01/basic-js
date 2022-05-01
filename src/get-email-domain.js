const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
 function getEmailDomain(email) {
  let a = email.split('');
  let num = a.indexOf('@') +1;
console.log(num);
 let res = a.slice(num,a.length);
  console.log(res);
  if (res.includes('@')){
    num = res.indexOf('@') +1;
    console.log(num);
    res = res.slice(num,res.length).join('');
    console.log(res);
  } else {
    res = res.join('')
  }
  console.log(res);
  return res
}

module.exports = {
  getEmailDomain
};
