//Variables

let param1 = parseInt(prompt("Insert parameter 1 : "));
let param2 = parseInt(prompt("Insert parameter 2 : "));
let param3 = parseInt(prompt("Insert parameter 3 : "));
let param4 = parseInt(prompt("Insert parameter 4 : "));


//Fuction Validate Numbers
function validationNumber (){

    if (Number.isInteger(param1,param2,param3,param4)){
        alert(`The number entered are ${param1},${param2},${param3},${param4}`)
    } else{
        alert("You have to enter numbers");
    }
}


//Callback Function validationNumber
validationNumber();