function someSimpleFunction() {
    // body of the function
    // some work to do in here
    console.log('doing work');
    // undefined is returned implictly
}

someSimpleFunction();

function funcWithArgs(a,b) {
 console.log(a,b);   
}

funcWithArgs('apple','banana');

function sum(a,b) {
    return a + b;
}

// bonus: different vars can refer to same function
// let stillSum = sum;
// console.log(typeof(stillSum));



let result = sum(5,9);

console.log(result);