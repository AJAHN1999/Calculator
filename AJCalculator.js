


function add(num1,num2){
    console.log( Number(num1+num2));
}

function subtract(num1,num2){
    console.log( Number(num1-num2));
}

function multiply(num1,num2){
    console.log( Number(num1*num2));
}

function divide(num1,num2){
    console.log( Number(num1/num2));
}

// const number1 = prompt("enter number 1");
// const operator = prompt("enter operator");
// const number2 = prompt("enter number 2");


function operate(no1,operator,no2){
    switch (operator){
        case "+":
            add(no1,no2);
            break;
        case "-":
            subtract(no1,no2);
            break;
        case "*":
            multiply(no1,no2);
            break;
        case "/":
            divide(no1,no2);
            break;
        default:
            alert("invalid operator");
    }
}

// operate(number1,operator,number2);

