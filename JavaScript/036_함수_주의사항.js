// 익명 즉시 실행 함수
// 메모리 효율 극대화.재사용할 수는 없음. (일회용 함수 느낌)
(function () {
    let a = 1;
    let b = 2;
    return a + b;
}());

// 기명 즉시 실행 함수
(function foo() {
    let a = 3;
    let b = 5;
    return a * b;
}());

foo(); // ReferenceError: foo is not defined
// 어차피 실행하지 못해서 의미가 없음.
// 메모리 효율적으로 관리하기 위해 바로 실행해야 하는 것들을 즉시 실행함수로 관리

// 모든 요소들이 로드된 이후에 실행, 함수는 1개만 실행 가능
// window.onload = function(){}
// $(document).ready() // 위와 같은 기능을 하는 jquery 문법

//함수가 종료되면 x1, x2 ..(지역변수)에 접근할 수 없음. 메모리를 다 반환함. 즉시 실행 함수를 사용하게되면 메모리를 반환하니까 메모리를 잡아먹지 않음. (아마 함수는 호출될 때마다 메모리를 잡는데 즉시 실행 함수는 딱 한번만 쓰고 다시 잡아먹지 않아서?) 
function 함수() {
    let x1 = 100;
    let x2 = 100;
    let x3 = 100;
    let x4 = 100;
    let x5 = 100;
    let x6 = 100;
    let x7 = 100;
    // ...
}

함수()

// 연습문제
let data = [{
    반 : 1, 
    번 : 1, 
    이름 : "호준", 
    중간고사점수 : 55
}, {
    반 : 1, 
    번 : 2, 
    이름 : "길동", 
    중간고사점수 : 60
}, {
    반 : 1, 
    번 : 3, 
    이름 : "영희", 
    중간고사점수 : 30
}, {
    반 : 1, 
    번 : 4, 
    이름 : "철수", 
    중간고사점수 : 20
}, {
    반 : 1, 
    번 : 5, 
    이름 : "규리", 
    중간고사점수 : 100
}]

// 중간고사 점수를 다 더하는 코드를 함수로 작성해주세요.

//내 코드
function score_sum(data) {
    sum = 0
    for(let i=0; i<data.length; i++) {
        sum += data[i].중간고사점수
        avg = sum/data.length
    }
    return avg;
}

score_sum(data);

// 동현, 준근님 코드
function 평균값구하기(data){
    let sum = 0;
    for(student of data){
        sum += student["중간고사점수"]
    }
    return sum / data.length
}

function 평균값구하기(data) {
    let 중간고사점수 = data.map((x) => x.중간고사점수)
    let 중간고사점수합 = 중간고사점수.reduce((a, b) => a + b)
    return 중간고사점수합 / data.length
}

function 평균값구하기(data) {
    return data.map((x) => x.중간고사점수).reduce((a, b) => a + b) / data.length
}

console.log(function () {
    return data.map((x) => x.중간고사점수).reduce((a, b) => a + b) / data.length
}());

let a = (data) => data.map((x) => x.중간고사점수).reduce((a, b) => a + b) / data.length
console.log(a(data));

let b = (data) => { return data.map((x) => x.중간고사점수).reduce((a, b) => a + b) / data.length }
console.log(b(data)); //화살표 함수에 {}가 들어가면 return을 생략할 수 없다?

//call by value, reference, sharing
// array와 같은 convension 자료형을 넘길 때에는 함수 안에서의 값이 수정이 됩니다.
// call by value(값의 전달), call by reference (참조-주소값의 전달)
//면접질문: javascript의 call by value, call by reference에 대해서 설명하세요.
//답변: javascript는 call by value만 존재함. 
//요약: js는 call by value밖에 없다. 첫번째 예시는 값 변경된다. 두번째 예시는 값 변경 안된다.

let test = [10, 20, 30]
function 함수(a) {
    a[0] = 1000 //함수 내부에서 값을 만질 수 있음. call by refernece. test의 a[0]이 1000으로 변경됨 (그런데 js에서는 call by reference가 없음. 변수가 가리키고 있는 공간에 저장된 '값(주소값도 값)'이 전달된다. 그래서 call by sharing이라는 단어가 나옴. )
}
함수(test) //js는 참조값을 넘길 때 참조한 주소값을 '복사'하여 넘김. 복사한 값(주소값도 값)을 넘기는 것이기 때문에 call by value
// a = [10, 20, 30], b = a, b[0] = 1000 을 하면 a는 수정이 됨.
// 10, 20, 30이라는 값을 가진 것을 a가 가리키고 얘를 b가 가리키고 있는 것이기 때문에 결국 따라 올라가서 0번지를 수정한다는 것. 그래서 함수 내부에서도 그렇게 인자를 전달하면 이 안에서 값의 변경이 되는 것임.


let test = 100
function 함수(a) {
    a = 1000 //test 값 수정 불가. call by value. 변경안됨.
}
함수(test) //a에 test안에 저장된 값 100이 a에 전달됨.
// a라는 값이 있고 test가 있는데 a=test를 하면 test는 100이니까 a가 100을 갖게 됨. a의 100이 test의 100과 관련이 없음. a의 100을 1000으로 수정한다고해서 test가 수정되지 않음. 


//call by reference 반례
// https://perfectacle.github.io/2017/10/30/js-014-call-by-value-vs-call-by-reference/
var a = {};
function test(b) {
    b = 1000; //아예 다른 자료형으로 바꾸는 것은 가능하지 않음. {}는 객체타입!! 1000은 원시타입!!
}

test(a)
a //{}가 출력됨.  c와 c++에서는 a가 1000이 됨. 

/*
call by value
아규먼트에 값이 넘어올 때 복사한 값이 넘어온다!

call by reference
아규먼트에 값이 넘어올 때 주소값이 넘어온다! (주소값이 넘어왔으니 접근을 하면 원본이다!)

- javascript는 참조값을 넘길 때 참조한 주소값을 '복사'하여 넘깁니다. 그래서 call by reference가 아니라 call by value입니다. '복사한 값'인거죠. 주소값도 값이니까요.

-  원시값은 파라미터에 복사한 값을 저장하고 참조타입은 파라미터에 참조 주소를 복사하여 저장합니다.

*/
