/**
 * ch02-01-06-3-variable.js
 */

// const case

const const_i1;             // 할당 없이 선언
console.log(const_i1);

const const_i2 = 10;        // 선언과 값 할당
console.log(const_i2);

const_i2 = 20;              // 상수 값 변경
console.log(const_i2);

const const_i2 = 30;        // 상수 재선언
console.log(const_i2);

const_i3 = 40;              
const const_i3 = 50;        // 상수 재선언
console.log(const_i3);

if (true) {
    const const_i4 = 60;    // 블록 안에서 선언
}
console.log(const_i4);      // 블록 밖에서 참조