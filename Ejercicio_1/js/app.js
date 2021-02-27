//Variables

let num1 = prompt("Insert number 1 : ");
let num2 = prompt("Insert number 2 : ");
let num3 = prompt("Insert number 3 : ");

//Function Calculator Numbers
function calculateNumbers(){

    console.log(`The numbers insert are ${num1}, ${num2}, ${num3}`)

    if(num1 >= num2 && num1 >= num3){
        
        if(num2 > num3){

            alert(`The order is higher to lower : ${num1}, ${num2}, ${num3}`)

        }else{

            alert(`The order is higher to lower : ${num1}, ${num3}, ${num2}`)
        }

        }else if(num2 >= num1 && num2 >= num3){

        if(num1 > num3){

            alert(`The order is higher to lower : ${num2}, ${num1}, ${num3}`)

        }else{

            alert(`The order is higher to lower : ${num2}, ${num3}, ${num1}`)
        }

    }else if(num3 >= num1 && num3 >= num2){

        if(num1 > num2){

            alert(`The order is higher to lower : ${num3}, ${num1}, ${num2}`)

        }else{

            alert(`The order is higher to lower : ${num3}, ${num2}, ${num1}`)
        }
    }
}



//Callback Function
calculateNumbers();
