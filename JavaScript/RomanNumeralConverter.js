/*
  Function convertToRoman takes a number for an argument
  and returns a string with the roman convertion of it.
  
  Author name: Ignacio Ciccone
  Date: 15/03/2023
*/

// Function unidad recieves a char with a unit figure and returns
// the roman convertion of it
function unidad (num){
    const numsInRoman = ["","I","II","III","IV","V","VI","VII","VIII","IX"];
    return numsInRoman[parseInt(num)];
  }
  
  // Function decena recieves a char with a ten figure and returns
  // the roman convertion of it
  function decena (num){
    const numsInRoman = ["","X","XX","XXX","XL","L","LX","LXX","LXXX","XC"];
    return numsInRoman[parseInt(num)];
  }
  
  // Function centena recieves a char with a hundred figure 
  // and returns the roman convertion of it
  function centena (num){
    const numsInRoman = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM"];
    return numsInRoman[parseInt(num)];
  }
  
  // Function miles recieves a char with a thousand figure
  // and returns the roman convertion of it
  function miles (num){
    let numsInRoman = "";
    for(let i = 1; i <= parseInt(num); i++){
      numsInRoman += "M";
    }
    return numsInRoman;
  }
  
  function convertToRoman(num) {
  // First, the function checks if the number is greather than 0.
    if(num <= 0){
     return undefined;
    }
    // The function creates a new variable with the number
    // converted into a string.
    let strNum = num.toString();
    // And it creates a new variable which will be the return var.
    let romanNum = "";
    // Depending on how many figures thas the number has:
    switch (strNum.length-1){
      case 0: // If it has only one figure:
        // The function converts the number to roman and saves it.
        romanNum = unidad(strNum[0]);
        break;
      case 1: // If it has two figures:
        // The function converts the ten figure and saves it,
        // then adds the unit figure converted.
        romanNum = romanNum.concat(decena(strNum[0]));
        romanNum = romanNum.concat(unidad(strNum[1]));
        break;
      case 2: // If it has three figures:
        // The function converts the hundred figure and saves it,
        // then adds the ten figure and finally the unit figure.
        romanNum = romanNum.concat(centena(strNum[0]));
        romanNum = romanNum.concat(decena(strNum[1]));
        romanNum = romanNum.concat(unidad(strNum[2]));
        break;
      case 3: // If it has four figures:
        // It does the same as before, but starting with the
        // thousand figure.
        romanNum = romanNum.concat(miles(strNum[0]));
        romanNum = romanNum.concat(centena(strNum[1]));
        romanNum = romanNum.concat(decena(strNum[2]));
        romanNum = romanNum.concat(unidad(strNum[3]));
        break;
    }
    // Finally it returns the number converted to roman.
    return romanNum; 
  }
  
  console.log(convertToRoman(3607));