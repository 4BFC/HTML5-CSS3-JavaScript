/**
 * ch02-01-06-4-variable.js
 */

// 변수의 호이스팅: var

console.log(var1);      // 선언 전 사용
var var1;

console.log(var1);      // 선언 후 사용 (값 미할당)

var1 = 20;
console.log(var1);      // 값 할당


// console.log(var2);   // 선언 없이 사용