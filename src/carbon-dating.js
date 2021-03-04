const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;
const T_HALF = 0.693;

module.exports = function dateSample(sampleActivity) {
    let k,t;
     if(typeof(sampleActivity) == 'string' && sampleActivity.length !== 0){
        k = T_HALF/HALF_LIFE_PERIOD;
        t = Math.ceil(Math.log(MODERN_ACTIVITY/Number(sampleActivity))/k);
        if(t > 0 && Number.isInteger(t)) return t;
        else return false;
    }else return false;
};
