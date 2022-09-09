/**
 * ch02-02-func2.js
 * - 화살표 함수
 * - 화살표 함수의 다양한 생략 가능한 표현
 * - 화살표 함수의 호이스팅 확인
 */


// 화살표 함수
// : 함수 표현식에서 function 키워드 생략하고 => 활용
// (param1, param2, ..., paramN) => { statements }
// (param1, param2, ..., paramN) => { return expression; }
// (param1, param2, ..., paramN) => expression

// 실습2: 화살표 함수 - 다음 조건에 따라 화살표 함수를 구현하고 결과를 console에 출력

// aFunc1: 매개변수를 2개 전달 받아서, 이 값을 더한 값을 반환하는 화살표 함수 구현
const aFunc1 = (val1, val2) => {
    let result = val1 + val2;
    return result;
}

// console.log(`aFunc1(100, 200): ${aFunc1(100, 200)}`);



// aFunc2: 화살표 함수의 매개변수, 0개이면 ()
// 매개변수 없이 함수 내부에서 선언한 상수 2개의 값을 더한 값을 반환하는 화살표 함수
const aFunc2 = () => {
    const val1 = 100;
    const val2 = 200;
    let result = val1 + val2;
    return result;
}

// console.log(`aFunc2(): ${aFunc2()}`);



// aFunc3a: 화살표 함수의 매개변수, 1개
// 매개변수를 1개 전달 받아서, 이 값에 200을 더한 값을 반환하는 화살표 함수
const aFunc3a = (val1) => {
    const val2 = 200;
    let result = val1 + val2;
    return result;
}

// console.log(`aFunc3a(100): ${aFunc3a(100)}`);



// aFunc3b: 화살표 함수의 매개변수, 1개이면 () 생략 가능
// aFunc3a()에서 매개변수가 1개이면 매개변수의 () 생략
const aFunc3b = val1 => {
    const val2 = 200;
    let result = val1 + val2;
    return result;
}

// console.log(`aFunc3b(101): ${aFunc3b(101)}`);



// aFunc4a: 화살표 함수의 body, 1줄
// aFunc3b() 함수의 정의를 1줄로 구현
const aFunc4a = val => {
    return val + 200;
}

// console.log(`aFunc4a(100): ${aFunc4a(100)}`);



// aFunc4b: 화살표 함수의 body, 1줄
// aFunc4a() 함수 정의에서 { }과 return 생략
const aFunc4b = val => val + 200;

console.log(`aFunc4b(101): ${aFunc4b(101)}`);



// aFunc5: 화살표 함수의 호이스팅 확인
// aFunc4b() 함수의 호이스팅 여부 확인
// console.log(`aFunc5(100): ${aFunc5(100)}`);

const aFunc5 = val => val + 200;
