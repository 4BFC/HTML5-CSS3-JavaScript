/**
 * ex-promise-03-promise.js
 */

// promise with promise chaining
const fs = require('fs');

const promise = new Promise( (resolve, reject) => {
    console.log('start');
    fs.readFile('./readme1.txt', (err, data) => {
        if (err){
            reject(err);
        }
        else {
            resolve(data);
        }
    })
})

promise
.then(data => {
    console.log(data.toString());
    return new Promise( (resolve, reject) => {
        fs.readFile('./readme2.txt', (err, data) => {
            if (err) {
                reject(err);
            }
            else {
                resolve(data);
            }
        });
    });
})
.then(data => {
    console.log(data.toString());
    return new Promise( (resolve, reject) => {
        fs.readFile('./readme3.txt', (err, data) => {
            if (err) {
                reject(err);
            }
            else {
                resolve(data);
            }
        });
    });
})
.then(data => {
    console.log(data.toString());
})
.catch(err => {
    console.error(err.message);
})
.finally(()=>{
    console.log('end');
});
