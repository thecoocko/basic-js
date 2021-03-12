const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {

const actions = ['--discard-next','--discard-prev', '--double-next','--double-prev'];

for(let i = 0 ; i< arr.length; i++){
    
    if(arr[i] === actions[0]){
        arr.splice(i,1);
        arr.splice(i+1,1);
    }

    if(arr[i] === actions[1]){
        arr.splice(i,1);
        arr.splice(i-1,1);
    }
    
    if(arr[i] === actions[2]){
        arr.splice();
    }

    if(arr[i] === actions[3]){
        arr.splice();
    }
    
}
  return arr;
};
