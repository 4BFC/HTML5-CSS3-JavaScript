/**
 * ch02-02-func1.js
 * - 함수 선언
 * - 함수 표현식
 * - 함수의 호이스팅 확인
 */

// 실습1: 문자열을 매개변수로 전달받고, 해당 문자열을 console에 출력하는 함수

// func1: 함수 선언문으로 함수를 정의하고, 함수 호출하기
function func1(str){
    console.log(str);
}

// func1("Hello, func1");



// func2: 함수 표현식으로 함수를 정의하고, 함수 호출하기
const func2 = function(str){
    console.log(str);
}

// func2("Hello, func2");



// func3: 화살표 함수로 함수를 정의하고, 함수 호출하기
const func3 = (str) => {
    console.log(str);
}

// func3("Hello, func3");



// func4~func6: 함수 호이스팅 확인

// func4("Hello, func4");   // func4: 함수 선언문
// func5("Hello, func5");   // func5: 함수 표현식
func6("Hello, func6");   // func6: 화살표 함수

function func4(str){
    console.log(str);
}
const func5 = function(str){
    console.log(str);
}
const func6 = (str) => {
    console.log(str);
}