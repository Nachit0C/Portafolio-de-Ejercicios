/*
  Function rot13 takes a string for an argument
  which is a string in code. Using the ciphers code, 
  the function returns the decoded string

  Author name: Ignacio Ciccone
  Date: 15/03/2023
*/
function rot13(str) {
    // The function creates a constant array with the alphabet
    const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    // It also creates a new string variable which will contain
    // the return value.
    let newStr = "";
    // The function iterates the string from the argument
    for(let i = 0; i < str.length; i++){
      // First it filters the non letter characters,
      // concatenating them directly to the return variable.
      if(str[i].match(/[^A-Z]/)){
        newStr += str[i];
      } else {
        // If it is a letter, i obtain the index from the alphabet
        // corresponding to that letter, and save it to a new var.
        let index = alphabet.indexOf(str[i]);
        // The function increses the index value 13 times
        for(let j = 0; j < 13; j++){
          index++;
          // if the index value reaches the final of the alphabet
          // array, it returns to the begining.
          if(index == alphabet.length){
            index = 0;
          }
        }
        // The function concatenates the proper letter to the 
        // return string
        newStr += alphabet[index];
      }
    }
    // Finally, it returns the decoded string
    return newStr;
  }
  
  console.log(rot13("SERR PBQR PNZC"));