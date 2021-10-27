let condition = true;
while (condition) {
  console.log('condition met');
  // condition = false;
  console.log('more stuff');
  break;
}

// less common do-while
// let userResponse;

// do {
//     userResponse = prompt("Wanna play?");
//     userResponse = userResponse.toLowerCase();
// } while(userResponse !== 'y') {
//     console.log('finally got a y');
// }

console.log('all done');


// for loop vs while loop

// let ctr = 1;

// while(ctr <= 10) {
//     console.log("Jumping Jack");
//     ctr += 1; // same as ctr = ctr + 1
// }

// with for loop

for (let ctr = 1; ctr <= 10; ctr += 1) {
  console.log('Jump');
}