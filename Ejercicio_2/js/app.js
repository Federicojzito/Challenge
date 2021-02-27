//Variables
const params = [123, 1551, 1441, '222', 15];

//Fuction Validate Numbers

function validationNumber() {   
    const palindromes = [];
    params.forEach((param) => {
        if (Number.isInteger(param)) {
        if (palindrome(param)) {
            palindromes.push(param);
        }
        }
    });

    palindromes.sort();
    console.log("Its Numbers from lowest to highest ", palindromes);
    
}

// Fuction Palindrome 
const palindrome = (params) => {
  let parameters = params;
  let result = parameters;
  let reverse = 0;

  while (parameters != 0) {
    reverse = (reverse * 10) + (parameters % 10);
    parameters = parseInt(parameters / 10);
  }

    if (Number.isInteger(param1,param2,param3,param4)){
        alert(`The number entered are ${param1},${param2},${param3},${param4}`)
    } else{
        alert("You have to enter numbers");
    }
  if (result == reverse) {
    console.log(reverse + " Is palindromo");    
    return true;
  }
  return false;
}


//Callback Function validationNumber
validationNumber();