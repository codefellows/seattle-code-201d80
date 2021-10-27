
let condition = true;

let otherCondition = true;

// truthy: true, 'false', 

// false-ish things are false, empty string, 0, 0.0, null, undefined, NaN

// if (condition && otherCondition) {
//     console.log("true enough");
// }

// if (false && true) {
//     console.log("true enough");
// }

if (4 && 'hi there' && true) {
  console.log("true enough");
} else {
  console.log("so falsy!")
}

console.log('all done');
