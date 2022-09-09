/**
 * ex-promise-06-sync.js
 */

// synchonized codes
const fs = require('fs');
 
console.log('start');

try {
    let data = fs.readFileSync('./readme1.txt');
    console.log(data.toString());

    data = fs.readFileSync('./readme2.txt');
    console.log(data.toString());

    data = fs.readFileSync('./readme3.txt');
    console.log(data.toString());
}
catch(err){
    console.error(err.message);
}
finally{
    console.log('end');
}