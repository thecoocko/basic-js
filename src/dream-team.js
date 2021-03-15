const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {

  if(Array.isArray(members)){
    let p = members.filter(i=>typeof(i)==='string');
    p = p.map(i=>i.trim());
    let res = [];
    for(let i=0; i <p.length;i++){
      res.push(p[i][0]);
      res[i] = res[i].toUpperCase();
    }
    return res.sort().join('');
  }else return false;
  /*if (Array.isArray(members)) {

    let result = [];
    let midres = [];

    if (members.every(el => typeof (el) === 'string')) {
      for (let i = 0; i < members.length; i++) {
        result.push(members[i][0].toUpperCase());
      }
      result = result.sort();
      return result.join('');
    }
    else {
      for (let i = 0; i < members.length; i++) {
        if (typeof (members[i]) === 'string') {
          midres.push(members[i]);
        }
      }
      midres = midres.join(' ');
      midres = midres.match(/\s\w+\s/gm);
      midres = midres.map(i => i.trim());


      for (let i = 0; i < midres.length; i++) {
        result.push(midres[i][0]);
      }
      result = result.sort();
      return result.join('').toUpperCase();
    }
  } else return false;*/
};
