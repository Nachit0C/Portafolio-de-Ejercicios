/*
  Function checkCashRegister takes three arguments:
  price: the price of the product that is being paid (number)
  cash: the amount is being paid (number)
  cid: cash in drawer (object)

  The function checks whether the cash is enough to pay,
  if it is enough, it returns the change 
  
  Author name: Ignacio Ciccone
  Date: 15/03/2023
*/
// Funcion sumCID recieves the cid value and returns it sum
function sumCID(cid){
    let sum = 0;
    // It iterates through the cid:
    for(let i = 0; i < cid.length; i++){
      // and sums it's coins/bills
      sum += cid[i][1];
    }
    return sum;
  }
  
  function checkCashRegister(price, cash, cid) {
    /* The function creates some usefull variables:
      change (array): will have the return object
      auxChange (array): will be used to store the change while
                          it's being sorted
      vuelto (number): difference between cash and price
      values (array): contains the values of the coins/bills
    */
    let change = [];
    let auxChange = [];
    let vuelto = cash-price;
    const values = [0.01, 0.05, 0.1, 0.25, 1, 5, 10, 20, 100];
    // First, the function checks whether there are sufficent funds
    if(sumCID(cid) < vuelto){
      // If it doesnt it returns:
      change = {"status": "INSUFFICIENT_FUNDS", "change": []};
    } 
    // If the amount in drawer is equal to vuelto:
     else if (sumCID(cid) == vuelto){
       // It returns status: closed plus the change, which
       // is the cash in the drawer
      change = {"status": "CLOSED", "change": cid};
    }
    // If the drawer has more than enough:
    else if (sumCID(cid) > vuelto) {
    // The funcion will sort the change 
    // in highest to lowest order.
  
    // first it iterates the drawer.
    // values of the coins/bills will go from highest to lowest
       for(let i = cid.length-1; i >= 0; i--){       
        // If the value of the coin/bill is less than the change
        if (values[i] <= vuelto){
          // The function checks if amount of cash there is with
          // that coin/bill value is less than or equal than
          // the total change it has to give back.
          if(cid[i][1] <= vuelto){
            // In that case, it adds the whole quantity
            // to the change variable for it´s correspondent
            // coin/bill value.
            auxChange.push([cid[i][0], cid[i][1]]);
            // Then it deducts that amount from the 'vuelto' var.
            vuelto -= cid[i][1];
          } // If the amount of cash of the particular coin/bill
            // is greater than the 'vuelto' value:
            else if(cid[i][1] > vuelto){
              // The function creates an auxiliary variable
              let aux = 0;
              // It then counts how many times does the value 
              // of the coin/bill is going to be used until
              // the 'vuelto' value is no longer greater than 
              // the value of the particular coin/bill value.
              while(values[i] <= vuelto && 
                    cid[i][1]> aux*values[i]){
                aux++;
                vuelto -= values[i];
              }
              // This 'if' was needed because of a bug where
              // the 'vuelto' value is 0.009999 instead of 0.01.
              if(vuelto > 0 && vuelto < 0.01){
                aux++;
              }
              // Then it adds the coin/bill and its value to 
              // the auxiliary change variable.
              auxChange.push([cid[i][0], aux*values[i]])
            }
        }
        // In case it cannot return the exact change:
        if(vuelto > 0.01){
          change = {"status": "INSUFFICIENT_FUNDS", "change": []};
        } // If it can return the exact change:
          else if(vuelto < 0.01){
            // The variable change is assigned with the
            // status:open and the change it has to give back.
            change = {status: "OPEN", "change": auxChange};
        }
      }
    }
    // Finally the function returns the variable change
    return change;
  }
  
  checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);