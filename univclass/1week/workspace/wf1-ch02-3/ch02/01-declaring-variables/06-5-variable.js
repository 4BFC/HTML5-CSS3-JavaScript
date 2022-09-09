/**
 * ch02-01-06-5-variable.js
 */

// 변수의 호이스팅: let

console.log(let1);      // 선언 전 사용
let let1;

console.log(let1);      // 선언 후 사용 (값 미할당)

let1 = 20;
console.log(let1);      // 값 할당


// console.log(let2);   // 선언 없이 사용