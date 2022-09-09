/**
 * ex-promise-04-promise.js
 */

// fs.promises with promise chaining
const fs = require('fs');
const fsPromises = fs.promises;

console.log('start');

fsPromises.readFile('./readme1.txt')
.then(data => {
    console.log(data.toString());
    return fsPromises.readFile('./readme2.txt');
})
.then(data => {
    console.log(data.toString());    
    return fsPromises.readFile('./readme3.txt');
})
.then(data => console.log(data.toString()))
.catch(err => console.error(err.message))
.finally(() => console.log('end'))