const display = document.querySelector(".displayValue");
const numberButtons = document.querySelectorAll(".restButtons");
const operateButtons = document.querySelectorAll(".operateButtons");
let operateButtonPressed = false;
const equalButton = document.querySelector(".equalButton");

let currentOperation={
    number1:'',
    operator:'',
    number2:'',
    resultant:'',
};


numberButtons.forEach(numberButton=>{numberButton.addEventListener("click",(event)=>{checkButtonType(event)
    display.textContent+=event.target.value;
    console.log(event.target.value);
})
});

function checkButtonType(event){
    const buttonValue = event.target.value;
    if(currentOperation.operator===''){
        currentOperation['number1']+=buttonValue;
    }
    else{
        currentOperation['number2']+=buttonValue;
    }
  
  
}


operateButtons.forEach(operateButton =>{operateButton.addEventListener("click",()=>{
    currentOperation["operator"]=operateButton.textContent;
    display.textContent+=operateButton.textContent;
})})


equalButton.addEventListener("click",()=>{
    let result = operate(parseFloat(currentOperation.number1),currentOperation.operator,parseFloat(currentOperation.number2));
    currentOperation['resultant']=result;
    display.textContent=result;
    currentOperation['number1']=result;
    currentOperation['number2']='';
});

function add(num1,num2){
    return Number(num1+num2);
}

function subtract(num1,num2){
   return  Number(num1-num2);
}

function multiply(num1,num2){
    return Number(num1*num2);
}

function divide(num1,num2){
    return Math.round(Number(num1/num2)*100)/100;
}

function operate(no1,operator,no2){
    switch (operator){
        case "+":
            return add(no1,no2);
            //break;
        case "-":
            return subtract(no1,no2);
            //break;
        case "*":
            return multiply(no1,no2);
            //break;
        case "/":
            return divide(no1,no2);
           // break;
        default:
            alert("invalid operator");
    }
}





//AC Button Functionality
const clearButton = document.querySelector(".clearButton");
clearButton.addEventListener("click",()=>{
    display.textContent="";
    currentOperation.number1='';
    currentOperation.number2='';
    currentOperation.operator='';
});

function populateDisplay(){

}





