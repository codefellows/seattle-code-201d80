'use strict';

/*
let userResponse = prompt("Pick a number");

let numberPicked = parseInt(userResponse);




// we want to say Congrats when correct number (42) is selected
// otherwise say Sorry

if (numberPicked === 42) {
  // do one thing
  console.log("Congrats")
} else {
  // do the other thing
  console.log("Sorry")
}

// also can do else if to handle more cases

*/

/*
(42 === '42')
false
(42 === 42)
true
(42 == '42')
true
(42 !== '42')
true
(42 != '42')
false
*/

let expr = 'Mangoes';
switch (expr) {
  case 'Oranges':
    console.log('Oranges are $0.59 a pound.');
    break;
  case 'Mangoes':
  case 'Papayas':
    console.log('Mangoes and Papayas are $2.79 a pound.');
    // expected output: "Mangoes and papayas are $2.79 a pound."
    break;
  default:
    console.log('Sorry, we are out of ' + expr + '.');
}