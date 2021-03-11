const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  
  if(date.toDateString() !== 0){

  const seasons = {
    'winter' : [ 'Jan', 'Feb', 'Dec'],
    'spring' : ['Mar', 'Apr', 'May'],
    'summer' : ['Jun', 'Jul', 'Aug'],
    'fall'   : ['Sep', 'Oct', 'Nov']
  }

  date = date.toDateString();
  date = date.match(/Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec/gm);

  for( i in seasons){
    for( let j =0 ; j <= seasons[i].length; j++ ){
      if(date[0] === seasons[i][j]) return i;
    }
  }
}else throw new Error(null);

};
