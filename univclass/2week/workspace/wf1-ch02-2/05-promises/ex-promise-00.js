/**
 * ex-promise-00.js
 */

// asynchronised code with promise
const condition = true;

console.log('hello');

const promise = new Promise((resolve, reject) => {
    if (condition) {
        resolve('success');
    }
    else {
        reject('fail');
    }
});

console.log('world');

promise
.then(message => {
    console.log(message);       // fulfilled from resolve case
})
.catch(err => {
    console.error(err);         // rejected from reject case
})
.finally(() => {
    console.log('default');     // default case
});