const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let names =  members.filter(i => {
    if(typeof(i) === 'string') return i;
  })
   if(Array.isArray(members)){
    let dream_team = [];
      for( let i =0 ; i< members.length; i++){
        dream_team.push(names[i][0]);
      }
      return dream_team.join('');
    }else false;
    
};
