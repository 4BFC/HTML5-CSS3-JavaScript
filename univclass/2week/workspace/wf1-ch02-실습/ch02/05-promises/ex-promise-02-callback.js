/**
 * ex-promise-02-callback.js
 */

// callback - Is this hell?
const fs = require('fs');

console.log(`start`);

fs.readFile('./readme1.txt', (err, data) => {
    if (err) {
        console.error(err);
    }
    else {
        console.log('1st reading', data.toString());
        fs.readFile('./readme2.txt', (err, data) => {
            if (err) {
                console.error(err);
            }
            else {
                console.log('2nd reading', data.toString());
                fs.readFile('./readme3.txt', (err, data) => {
                    if (err) {
                        console.error(err);
                    }
                    else {
                        console.log('3rd reading', data.toString());
                    }                    
                    console.log(`end`);
                });
            }
        });    
    }
});






