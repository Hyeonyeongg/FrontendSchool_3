//callback function
//나중에 부르는 함수들을 의미함.

function sum(x, y, 콜백함수) {
    //1000줄
    콜백함수(x + y);
    //1000줄
    // return x + y
}

function doucumentWriter(s) {
    document.write('콜백함수', s) 
}

//sum(10, 20, console.log); //콜백함수에 console.log가 들어가서 (x+y)가 출력됨.
sum(10, 20, doucumentWriter); //콜백함수30이 document에 작성됨. doucumentWriter가 콜백함수에 전달됨. 만약, 1000줄이 앞 뒤로 있다고 가정하면 콜백함수(x+y)가 언제 실행될지 모르지만 함수를 아규먼트로 전달해서 언젠가 실행해줌. 함수를 아규먼트로 전달해서 코드 어딘가에서 얘를 호출하는 것이 콜백함수.


// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/map
// 구문 : arr.map(callback(currentValue[, index[, array]])[, thisArg])
let arr = [10, 20, 30, 40, 50]
arr.map(제곱) //함수 이름만 아규먼트로 넣어주면 됨.

//함수가 아래에 있어도 호이스팅으로 인해 정상 작동함.
function 제곱(x) {
    return x**2
}
// x => x**2 (화살표 함수로 만든것)
arr.map(x => x**2)



//https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
// arr.forEach(callback(currentvalue[, index[, array]])[, thisArg])
// https://caniuse.com/mdn-api_nodelist_foreach // 노드에서의 forEach는 IE에서 작동하지 않습니다.

function 두배(x) {
    console.log(x * 2)
}

//map은 새로운 배열을 만들어주고, foreach는 순회만 함.
let arr = [10, 20, 30, 40, 50]
arr.forEach(두배)




//////////////////////////////////////
// 문제: 화살표 함수를 사용해서 아래 map과 동일한 기능을 하는 forEach문을 완성해주세요.
let arr = [10, 20, 30, 40, 50]
arr.map(x => x**2)

let result = []
arr.forEach(e => {
    result.push(e**2)
})
console.log(result)

