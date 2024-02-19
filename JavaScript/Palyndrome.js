/*
  Function palindrome takes a string for an argument
  and returns true if the string is spelled the same way
  both forward and backward. Otherwhise it returns false.
  
  Author name: Ignacio Ciccone
  Date: 15/03/2023
*/
function palindrome(str) {
    // The function creates a new variable which contains the
    // string from the argument, converting all the letters to
    // lowercase.
    let aux = str.toLowerCase();
    // Then, it filters the non alphanumeric characters
    // and saves the alphanumeric ones in an array.
    aux = aux.match(/[A-Za-z0-9]/g);
    // The function iterates the array with two variables
    // 'i' which goes from the first element of the array to half
    // 'j' which goes from the last element of the array to half
    let j = aux.length-1;
    for(let i = 0; i < Math.ceil(aux.length/2); i++){
      if(aux[i] !== aux[j]){
        // It returns false if the chars are not equal
        return false;
      }
      j--
    }
    // If the program is still running after the iteration,
    // it means that the conditions check to confirm that
    // the string recieved as argument it is a palindrome
    return true;
  }
  
  console.log(palindrome("eye"));