const display = document.querySelector(".displayValue");
const numberButtons = document.querySelectorAll(".restButtons");
const operateButtons = document.querySelectorAll(".operateButtons");
const equalButton = document.querySelector(".equalButton");

let currentOperation={
    number1:'',
    operator:'',
    number2:'',
    resultant:'',
};

function displayCurrentOperation(){
    display.textContent=`${currentOperation['number1']}${currentOperation['operator']}${currentOperation['number2']}`;
}


numberButtons.forEach(numberButton=>{numberButton.addEventListener("click",(event)=>{checkButtonType(event)
    // display.textContent+=event.target.value;
    displayCurrentOperation();
    console.log(event.target.value);
})
});

function checkButtonType(event){
    const buttonValue = event.target.value;
    if (buttonValue === '.') {
        // Check if there's already a dot in the current number
        if (currentOperation.operator === '' && currentOperation.number1.includes('.')) {
            return; // Do nothing if there's already a dot in number1
        } else if (currentOperation.operator !== '' && currentOperation.number2.includes('.')) {
            return; // Do nothing if there's already a dot in number2
        }
    }

    if (currentOperation.operator === '') {
        if (buttonValue !== '0' || currentOperation.number1 !== '') {
            currentOperation['number1'] += buttonValue;
        }
    } else {
        if (buttonValue !== '0' || currentOperation.number2 !== '') {
            currentOperation['number2'] += buttonValue;
        }
    }
  
}


operateButtons.forEach(operateButton =>{operateButton.addEventListener("click",()=>{
    if(currentOperation["operator"]===''||(currentOperation['number2']==='')){
        currentOperation["operator"]=operateButton.textContent;
        //display.textContent+=operateButton.textContent;
        displayCurrentOperation();
    }
    else{
            calculateResult();
            currentOperation["operator"]=operateButton.textContent;
            //display.textContent+=operateButton.textContent;
            displayCurrentOperation();
    }
    
})})


equalButton.addEventListener("click",()=>{
        calculateResult();
});



function calculateResult(){
    if(currentOperation.number1===''||currentOperation.number2===''){
        if(currentOperation.number1===''){currentOperation.number1='0';}
        else{currentOperation.number2='0';}
    }
    result = operate(parseFloat(currentOperation.number1),currentOperation.operator,parseFloat(currentOperation.number2));
    if(isNaN(result)|| result===null){
        result='0';
        currentOperation['resultant']=result;
        display.textContent=result;
        currentOperation['number1']=result+'';
        currentOperation['operator']='';
        currentOperation['number2']='';
    }
    else{
        result = Math.round(result*100)/100;
        currentOperation['resultant']=result;
        display.textContent=result;
        currentOperation['number1']=result+'';
        currentOperation['operator']='';
        currentOperation['number2']='';
    }
}

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
            if(divide(no1,no2)===Infinity){
                alert("you cannot divide by zero");
                return null;
            }
            else{
                return divide(no1,no2);
            }
           // break;
        default:
            alert("invalid operator");
    }
}


//DE button functionality



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





