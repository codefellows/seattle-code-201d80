// An array is a collection of items
// any length >= 0 
// can have mixed types
// BUT often a single type of data is preferred

let nums = [5, 1, 8, 6, 2, 7];

let index = nums.length - 1;
console.log('value at index', index, 'is', nums[index]);

// // log out each number in order
for (let i = 0; i < nums.length; i += 1) {
  console.log('num', nums[i]);
}


// is the number in the nums array?
let containsNum = false;
let targetNum = 7;

for (let i = 0; i < nums.length; i += 1) {
  let currentNum = nums[i];
  if (currentNum === targetNum) {
    containsNum = true;
    break;
  }
}

console.log('Contains Number', containsNum);

let veggies = ["artichoke", "broccoli", "cucumber"];

let vegIndex = veggies.indexOf("beets");

console.log("vegIndex", vegIndex);

console.log(veggies.includes('beets'));

// bonus question about popping
console.log('veggies at -1', veggies[veggies.length - 1]);

let val = veggies.pop(vegIndex); // DANGER

console.log('popped', val);
