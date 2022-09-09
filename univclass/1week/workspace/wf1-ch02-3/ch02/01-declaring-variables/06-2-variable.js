/**
 * ch02-01-06-2-variable.js
 */

// let case
let let_i1;             // 할당 없이 선언
console.log(let_i1);

let let_i2 = 10;        // 선언과 값 할당
console.log(let_i2);

let_i2 = 20;            // 변수 값 변경
console.log(let_i2);

let let_i2 = 30;        // 변수 재선언
console.log(let_i2);

let_i3 = 40;            // var/let 없이 선언 (number)

let let_i3 = 50;        // 변수 재선언
console.log(let_i3);

if (true) {
    let let_i4 = 60;    // 블록 안에서 선언
}
console.log(let_i4);    // 블록 밖에서 참조