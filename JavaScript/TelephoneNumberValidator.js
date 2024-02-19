/*
  Function telephoneCheck takes a string for an argument
  containing a possible telephone number. It returns a boolean
  after checking whether the string is a valid US number or not.
  
  Author name: Ignacio Ciccone
  Date: 15/03/2023
*/
function telephoneCheck(str) {
    // The function starts by checking if the string sent has
    // the proper amount of numbers for a valid US number.
    if(str.match(/\d/g).length !== 10 
        && str.match(/\d/g).length !== 11){
    // If it doesnt have either 10 or 11 numbers, it returns false.
      return false; 
    } else if (str.match(/\d/g).length == 11 && str[0] != 1){
    // If it has 11 numbers but the country code isn't '1',
    // it returns false aswell.
      return false;
    } if(str.match(/\d/g).length == 10){ // If it's a 10 number str
        if(/^\d{3}([-|\s])*\d{3}([-|\s])*\d{4}$/.test(str)){
          // It checks that the string has a proper order:
          /*
            It starts (^) with 3 numbers (\d{3}), then it can be
            followed by either a dash or a whitespace ([-|\s])*.
            Then it follows with 3 more numbers (\d{3}) and again
            it may have a dash or whitespace ([-|\s])*. Finishing
            ($) with the 4 last numbers \d{4}.
          */
          return true;
        } else {
          return /^(\(\d{3})([\)])\s*\d{3}([-])\d{4}$/.test(str);
          // If it starts with an open parenthesis, it checks
          // the same but considering it ( \( ) and its closing
          // ([\)])
        }
    } else if (str.match(/\d/g).length == 11) {
      // If its a 11 number string, it checks the same as the 10
      // number string, but checking that is has a '1' at the start
      if(/^1\s*(\d{3})([-|\s])*\s*\d{3}([-|\s])*\d{4}$/.test(str)){
          return true;
        } else {
          return /^1\s*(\(\d{3})([\)])\s*\d{3}([-])\d{4}$/.test(str);
        }
    }
    // If the string doesn't check out, it returns false.
    return false;
  }
  
  console.log(telephoneCheck("555-555-5555"));