


alert('Choose the operation you want:');


var mathematics = prompt('sum minus div mult');


var firstNumber = prompt('Insert the first number here:');
firstNumber = parseInt(firstNumber);

var secondNumber = prompt('Insert the second number here:');
secondNumber = parseInt(secondNumber);


function sum(){
    var ris = firstNumber + secondNumber;
    alert('The result is: ' + ris);
}

function minus(){
    var ris = firstNumber - secondNumber;
    alert('The result is: ' + ris);
}

function division(){
    var ris = firstNumber / secondNumber;
    alert('The result is: ' + ris);
}

function moltiplication(){
    var ris = firstNumber * secondNumber;
    alert('The result is: ' + ris);
}

function result(){
    switch(mathematics) {
        case "sum": 
            sum();
            break;
        case "minus": 
            minus();
            break;
        case "div": 
            division();
            break;
        case "mult": 
            moltiplication();
            break;
    }

}

result();