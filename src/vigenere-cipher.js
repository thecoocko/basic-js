const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  
  encrypt(message,key) {
    
      //split the string into an array
      let arr = message.split("");
      let keyValue = [];

      for (let i = 0; i < key.length; i++) {
          //finding the letter(key) value and push it to key value
          keyValue.push(arr.indexOf(key[i]));
      }
      let redacted = "";
      let pointer = 0;
      for (let i = 0; i < message.length; i++) {
          if (arr.includes(message[i])) {
              let shift = arr.indexOf(message[i]) + keyValue[pointer];

              if (shift >= 26) {
                  redacted += arr[shift - 26];
              } else {
                  redacted += arr[shift];
              }  
              pointer += 1;
          } else {
              pointer = 0;
              redacted += message[i];
          }

          if (pointer >= keyValue.length) {
              pointer = 0;
          }
      }
      return redacted
  }    
  decrypt(message,key) {
      let arr = message.split("");
      let keyValue = [];

      for (let i = 0; i < key.length; i++) {
          //finding the letter(key) value and push it to key value
          keyValue.push(arr.indexOf(key[i]));
      }
      let decoded = "";
      let pointer = 0;
      for (let i = 0; i < message.length; i++) {
          if (arr.includes(message[i])) {
              let shift = arr.indexOf(message[i]) - keyValue[pointer];
              if (shift < 0) {
                  decoded += arr[26 - Math.abs((arr.indexOf(message[i]) - keyValue[pointer]))];
              } else {
                  decoded += arr[Math.abs((arr.indexOf(message[i]) - keyValue[pointer]))];
              }

              pointer += 1;
          } else {
              pointer = 0;
              decoded += message[i];
          }

          if (pointer >= keyValue.length) {
              pointer = 0;
          }
      }
      return decoded
  }
}

module.exports = VigenereCipheringMachine;
