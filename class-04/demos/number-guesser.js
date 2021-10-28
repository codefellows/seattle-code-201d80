/*
Ask user to guess number
Give 4 chances max to guess
if low say low
if high say high
if correct say correct
if don't get in max tries then say the correct answer
*/

'use strict';

let correctAnswer = 6;
let maxTries = 4;
let tryCount = 0;

// -> start loop here?
while(tryCount < maxTries) {

    let numberString = prompt('Guess a number:');

    let guessedNumber = parseInt(numberString);

    // DANGER: what about bad input????
    // TODO: validate input as number

    if (guessedNumber === correctAnswer) {
        alert('you got it');
        // we got it right, so bail
        break;
        
    } else if (guessedNumber < correctAnswer) {
        alert('too low');
    } else {
        alert('too high');
    }

    tryCount += 1;
}
// -> end loop

// need to show the correct answer if they did NOT guess in time
if (tryCount === maxTries) {
    alert('The correct answer is ' + correctAnswer);
}

console.log('Game over');
