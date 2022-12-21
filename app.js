"use strict";
const n1 = document.getElementById('num1');
const n2 = document.getElementById('num2');
const buttonElement = document.querySelector('button');
//creating arrays using generics
const numResults = [];
const textResults = [];
function add(num1, num2) {
    if (typeof num1 === 'number' && num2 === 'number')
        return num1 + num2;
    else {
        if (typeof num1 === 'string' && num2 === 'string')
            return num1 + '' + num2;
    }
    return +num1 + +num2;
}
// //usage of Objects can define it is object and also the keys and there types
// function result(resultObj: Result) {
//     console.log(`result ${resultObj.val} at ${resultObj.timeStamp}`);
//   }
function printResult(resultObj) {
    console.log(resultObj.val);
}
buttonElement === null || buttonElement === void 0 ? void 0 : buttonElement.addEventListener('click', () => {
    const num1 = n1.value;
    const num2 = n2.value;
    const result = add(+num1, +num2);
    numResults.push(result);
    const stringResults = add(num1, num2);
    textResults.push(stringResults);
    printResult({
        val: result,
        timeStamp: new Date()
    });
    console.log(numResults, textResults);
});
//cresting promises
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('it worked');
    }), 1000;
});
promise.then(result => {
    console.log(result.split('w'));
}).catch(err => {
    console.log(err);
});
