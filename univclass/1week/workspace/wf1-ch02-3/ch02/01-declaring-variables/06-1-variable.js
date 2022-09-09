/**
 * ch02-01-06-1-variable.js
 */

// var case

var var_i1;             // 할당 없이 선언
console.log(var_i1);

var var_i2 = 10;        // 값 할당
console.log(var_i2);

var_i2 = 20;            // 값 할당 (변경)
console.log(var_i2);

var var_i2 = 30;        // 변수 재선언
console.log(var_i2);

var_i3 = 40;            // var 없이 선언
console.log(var_i3);

var var_i3 = 50;        // 변수 재선언
console.log(var_i3);

if (true) {
    var var_i4 = 60;    // 블록 안에서 선언
}
console.log(var_i4);    // 블록 밖에서 참조