const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
 const chainMaker = {
  chain: '',
  getLength() {
    return this.chain.split('~~').length;
    
  },
  addLink(value) {
    let arr = this.chain.split('~~');
    arr.push(`( ${value} )`);
    arr = arr.filter(function (el) { return el != ""; });
    this.chain = arr.join('~~');
    console.log(this);
    return this;
  },
  removeLink(position) {
      let arr = this.chain.split('~~');
      if (arr.length < position || typeof position != 'number' || position < 1) {
        this.chain = arr.join('~~');
        this.chain = '';
        throw new Error("You can't remove incorrect link!");
      };
      arr.splice(position - 1, 1)
            this.chain = arr.join('~~');
      return this;
   console.log(this.chain);
  },
  reverseChain() {
    let arr = this.chain.split('~~');
    arr.reverse();
    this.chain = arr.join('~~');
    return this;
    console.log(this.chain);
  },
  finishChain() {
    let answer = this.chain;
    this.chain = '';
       console.log(this.chain);
    return answer;
  }

};

module.exports = {
  chainMaker
};
