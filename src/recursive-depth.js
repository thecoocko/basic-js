const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  constructor(){
    this.calculateDepth = this.calculateDepth.bind(this);
}
  calculateDepth(arr) {
    return Array.isArray(arr) ? 1 +  arr.reduce((a,b)=> Math.max(a,this.calculateDepth(b)),0) : 0;
  }
};
