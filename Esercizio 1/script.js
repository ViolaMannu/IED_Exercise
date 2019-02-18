//Es. 1
/*
var myNumber = prompt('Write a number:');
myNumber = parseInt(myNumber);
if(myNumber == 10){
    alert('You Are Lucky');
} else {
    alert('Try again!');
}
//Es. 2
var myNumber = prompt('Write a number:');
myNumber = parseInt(myNumber);
var myNumberTwo = prompt('Write another number:');
myNumberTwo = parseInt(myNumberTwo);
if(myNumber == myNumberTwo){
    alert('Good Job!!!');
} else{
    alert('Try Again');
}
//Es. 3
var stringOne = prompt("Insert a String:");
var stringTwo = prompt("Insert another String:");
if (stringOne == stringTwo){
    alert("The Strings are the same!");
}
else{
    alert("The Strings aren't the same! ")
}
//Es. 4 con switch
var chosenWord = prompt('Write a word');
switch(chosenWord){
case "Pizza":
case "Snack":
    alert("Pausa veloce");
    break;
case "Spaghetti":
    alert("Pausa Lenta");
    break;
default :
     alert("Pausa Indefinita");
     break;
}
*/

//Es. 4  con if else

var chosenWord = prompt('Write a word');

if(chosenWord == 'Pizza'|| chosenWord == 'Snack') {

    alert("Pausa veloce");

  } else if (chosenWord == 'Spaghetti') {

    alert( 'Pausa Lenta' );

  } else {

    alert( 'Pausa Indefinita' );

  }