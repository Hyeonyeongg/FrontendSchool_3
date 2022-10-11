/////////////////////////////////////함수의 구조/////////////////////////////////////////////////
//파선아실 (파라미터가 선언할 때. 아규먼트가 실제로 실행할 때 넣는 값)
//함수 내부에서 선언된 변수가 파라미터.

function 안녕(파라미터) {
    console.log(파라미터)
    console.log('hello world')
    return 100 //자신을 불러온 자리(안녕()자리)에 100을 넣음.
}

let 아규먼트 = 1000;
안녕(아규먼트) //아규먼트와 같이 변수말고도 1000이렇게 값을 직접 넣을 수 있음
console.log(안녕(아규먼트)+안녕(아규먼트))

//콘솔에 console.log('hello world')를 했을 때 리턴값은? console.log의 리턴값은 undefined
/*
console.log('hello world')
hello wolrd
undefined

console.log(console.log('hello world'))
hello wolrd
undefined
undefined

//리턴값이 hello가 아님. hello는 실행되는 구문임에 유의.
console.log(String(console.log('hello')) + String(console.log('hello')))
*/

//return은 반환
//리턴 예제1
function 안녕() {
    console.log('hello') //함수 안에 있는 console.log는 console.log의 반환값이 undefined가 반환되지 않는듯?
    //리턴 구문 생략시 undefiend가 반환됨
} 
안녕()
console.log(안녕() + 안녕()) //undefined + undefined이므로 NaN이 나옴. 
console.log(String(안녕()) + String(안녕())) //undefinedundefined가 나옴

//리턴예제2
function 안녕() {
    console.log('hello')
    return 10
}   
안녕()
console.log(String(안녕()) + String(안녕())) //1010


//리턴예제 3
function 안녕() {
    console.log('hello')
    return //그냥 return만 주면 return undefined와 같음. return은 종료.
}   
안녕()
console.log(String(안녕()) + String(안녕())) //undefinedundifined가 나옴

//리턴예제4
function 안녕() {
    console.log('hello')
    console.log('hello')
    console.log('hello')
    return //return을 만나면 함수를 종료하고 자신을 불러온 자리에 리턴값을 넣음.
    console.log('hello')
    console.log('hello')
    console.log('hello')
    console.log('hello')
}   
안녕() //return값은 undefined


//리턴 예제(질의 응답). 이런식으로 많이 사용함.
function 안녕() {
    console.log('hello')
    console.log('hello')
    console.log('hello')
    if(특정조건) {
        return 100
    }
    else {
        console.log('hello');
        console.log('hello');
        console.log('hello');
        return 1000
    }
    return
    //아래코드를 실행하지 않습니다.
} 
console.log(안녕())  



//이렇게 작성하면 안됨. 함수명은 더하기지만 곱하기하는 역할
function sum(a, b) {
    return a * b
}
console.log(sum(10, 20))


//////////////////////////////////함수를 사용하는 이유//////////////////////////////////////////

//1. 재사용성
//(재사용하지 않는 코드도 함수로 정의하나요? -> 가능하면 함수로 만드는 것을 권합니다.)
//2. 유지보수
// -> 3번 사항 + 변수의 스코프 제한
//3. 구조 파악이 용이하다.
// 참고만
//4. 추상화로 개발하는 것이 객체지향 프로그래밍(OOP, Object Oriented Programming)언어의 언어 철학에 맞다. (추상화는 자동차 운전할 때 페달을 밟으면서 페달이 어떤 기능이 있는지 생각하면서 페달을 밟지는 않음. 페들로써 기능이 추상화되어있는 것. 땅파기 기능을 몰라도 땅파기 기능을 한다고 믿고 사용함.)


//집짓기 코드. 만약, 이렇게 안하고, 10만줄씩 그냥 써놓으면 구조 파익이 어려움.
// 땅파기에서 사용했던 코드를 다른 곳에서 사용할 수 없게함. 유지보수가 편해짐.
/*
    땅파기()
    기반닫지기()
    기둥세우기()
    벽돌쌓기()
    지붕올리기()
*/

//////////////////////////////////함수의 다양한 형태//////////////////////////////////////////

//1. 함수의 아규먼트에 따른 반환값
function 함수1(a, b, c) {
    return a + b + c;
}

함수1(10, 20, 30); //60이 나옴. (참고)콘솔창에 console.log를 이용해서 찍지 않았는데도 어떻게 60이 출력될까? 참고. 이것은 콘솔창의 기능으로, 마지막 라인에 한하여 console.log()를 찍지 않아도 return값을 console창에 출력해줌.
함수1(10, 20, 50); //위에있는 10, 20, 30의 결과값은 나오지 않음. (마지막 라인에 한하여 해당되므로.)

//다음 실행 값은? 60 80 undefined가 나옴. 사실, 60 undefiend 80 undeifeind임. 그런데, 60 다음의 undefined를 생략해준것.
console.log(함수1(10, 20, 30))
console.log(함수1(10, 20, 50))

// 필요 이상의 아규먼트를 넣었을 때
함수1(10, 20, 30, 40) // 10 20 30만 계산되어 60이 나옴. Error를 뿜지 않음.

// 필요 이하의 아규먼트를 넣었을 때
함수1(10, 20) //3개를 받아야 하는데 하나의 값이 없음. c에 undefined가 들어갔기 때문에 10 + 20 +Undefined 되어서 NaN이 나옴.
/*
    function 함수1 (a, b, c) {
        return a + b + String(C)
    }
    함수1(10, 20) //'30undefined'
*/

//2. 구조분해할당을 이용한 아규먼트 처리
//필요 이상의 아규먼트를 넣었을 때 처리하려면? 구조분해할당을 이용한 아규먼트 처리 (많이 볼 형태는 아님)
function 함수2(a, b, ...c) {
    console.log(c) //[10, 20, 30, 40] c가 나머지 요소를 받아서 전부 처리할 수 있음.
    return Math.max(...c)
}
함수2('hello', 'world', 10, 20, 30, 40);

function 함수2([a, b], ...c) { //...c에 10, 20, 30, 40이 깡그리되어서 들어감. 자료형이 number로 동일해서 배열로 자동으로 만들어지는건가?
    console.log(a)
    console.log(b)
    console.log(c) 
}
함수2([1, 2], 10, 20, 30, 40);

//3. 기본값 할당
function 함수3(a=10, b=20, c=30) {
    return a + b + c
} 

console.log(함수3()) //60
console.log(함수3(100)) //150
console.log(함수3(100, 200)) //330
console.log(함수3(100, 200, 300)) //600
console.log(함수3(c=1000)) //1050 (1030이 정상이지만 c로 명시했더라도 값이 순서대로 들어감. 즉, a에 1000이 들어간것.)
console.log(함수3(c=1000, a=2000)) //3030. (3020이 나와야 정상이지만 값이 순서대로 들어감. 즉, a에 1000 b에 2000이 들어간것.)

//4. 함수에서 객체를 아규먼트로 (중요) 
// https://www.freecodecamp.org/news/elegant-patterns-in-modern-javascript-roro-be01e7669cbd/

//개선할 여지가 있는 예제
function 함수4(회원등급, 글쓰기, 글읽기, 채널관리, 백업, 소셜로그인여부) { //회원 등급
    console.log(함수기능)
    return
} 

함수4('Gold', true, true, true, '대화방 전체 백업 가능', true) //이렇게 호출하게되면 호출문만 봐서는 true가 무엇을 의미하는지 알 수 없음.그래서 true가 어떤 값인지 확인하기 위해서 함수4가 선언되어 있는 파일로 가서 확인해야 함. 가독성이 떨어짐.

//RORO 기법. (함수에 아규먼트로 값을 전달할 때 오브젝트로 전달하게 되면 조금더 가독성이 높아지는 코드를 작성할 수 있음.)
function 함수4({ //회원등급권한
        회원등급, //(참고)중괄호나 소괄호 안에서는 개행이 가능함.
        글쓰기,
        글읽기,
        채널관리,
        백업,
        소셜로그인여부
    }){ 
    console.log('함수기능');
    console.log(회원등급, 글쓰기, 글읽기, 채널관리, 백업, 소셜로그인여부);
    return
} 

함수4({
    회원등급: 'Gold',
    글쓰기: true,
    글읽기: true,
    채널관리: false,
    백업: '부분가능',
    소셜로그인여부: true
})

//////////입력되지 않은 값은 undefined가 됨.//////////
function 함수4({
    회원등급, //(참고)중괄호나 소괄호 안에서는 개행이 가능함.
    글쓰기,
    글읽기,
    채널관리,
    백업,
    소셜로그인여부
}){ 
console.log('함수기능');
console.log(회원등급, 글쓰기, 글읽기, 채널관리, 백업, 소셜로그인여부);
return
} 

함수4({회원등급:'Gold',
채널관리: false,
백업: '부분가능',
소셜로그인여부: true})

//////////초기값 설정1//////////
function 함수4({
    회원등급 = 'Gold', //회원등급 : 'Gold'로 작성시 에러 발생. (참고)중괄호나 소괄호 안에서는 개행이 가능함. 
    글쓰기 = true,
    글읽기 = true,
    채널관리 = true,
    백업 = '부분가능',
    소셜로그인여부 = true
    }){ 
    console.log('함수기능');
    console.log(회원등급, 글쓰기, 글읽기, 채널관리, 백업, 소셜로그인여부);
    return
} 

함수4({
    회원등급: 'silver',
    소셜로그인여부: true
})

//////////초깃값 설정 2 ////////////////
// 참고삼아서만 보세요.
function 함수4({
    회원등급: 'Gold', // 안되는 이유? 
    글쓰기, 
    글읽기, 
    채널관리, 
    백업, 
    소셜로그인여부
    }){
    console.log('함수기능')
    console.log(회원등급, 글쓰기, 글읽기, 채널관리, 백업, 소셜로그인여부)
    return
}

함수4({
    회원등급 : 'Silver', 
    소셜로그인여부: true
})

let one;
let two;
let three;
{one, two, three}; //one, two, three는 각각 undefined가 할당되어 있음.

let {one, two, three} = {one: 10, two: 100, three: 200} // 작동
let {one:30, two, three} = {one: 10, two: 100, three: 200} // Error
let {one = 30, two, three} = {one: 10, two: 100, three: 200} // 등호가 된다는 원리가 이 이유입니다. 초기값을 설정할 때는 =를 사용해야한다?

//동현님 글
function 함수(a=10, b=20, c=30) {
    return a + b + c
}
함수() //(o)아규먼트 없어도 60이 출력됨.

function 함수({a=10, b=20, c=30}) {
    return a + b + c
}
함수() //(x)실행 안됨. 오브젝트가 들어가야 함. 마치 let {a=30, b=20, c=30} = undefined랑 같은것. 사실상 undefiend도 없이 보낸것. 매칭할 값 자체도 없는 것. 오브젝트의 구조분해 할당에서는 값이 없더라도 일단 오른쪽에 {}가 있어야함.

function 함수({a=10, b=20, c=30}) {
    return a + b + c
}
함수({}) //(o)출력됨. {}이것도 입력하지 않게 하려면? 이 코드를 축소한 코드가 아래 코드. 

function 함수({a=10, b=20, c=30} = {}) {
    return a + b + c
}
함수(); //아규먼트 없어도 실행됨. 
//참고만
// let {one:1 two:2} = {}
// 만약, one을 입력하면 1이 나옴. 이 효과를 노린것. 오른쪽에 one, two라는 값이 없으니까 못들어 온것. 
// let {one = 1, two = 1} = {one: 100} 매핑이 되려면 오른쪽에 one 100이 있어야 one에 100이 들어가는데 {one:1 two:2} = {}는 매핌되는 값이 없는것. 그래서 매핑이 안됐기 때문에 그냥 {one:1 two:2가 그대로 남는 것}

// let {a=2, b=1, c=3} = {}
// let {a=2, b=1, c=3} = {a: 100} 구조분해할당으로 a가 100이됨. 그러나 b나 c는 없기 때문에 b=1 c=3이 남아있고 a만 변경되는 것. 이 성질을 이용!
// let {a=2, b=1, c=3} = {}의 의미는 마치 위에서 b랑 c의 값이 없었던 것처럼 오른쪽에 아무런 값이 없기 때문에 할당이 안되어서 오브젝트 값이 그대로 할당되게 해준다는 것. 그러면 a, b, c가 그대로 2, 1, 3으로 남아있는 것. 


/////////////////////////////////////////재귀함수///////////////////////////////////////////
//재귀함수: 내가 나를 호출하는 함수
//재귀함수는 반복문으로 구현가능. 재귀함수 <-> 반복문
// 반복문(Bottom-up)은 아래서부터 위로 올라는 방식에서 많이 사용
// 재귀함수(top-down)는 위에서부터 아래로 내려가는 방식에서 많이 사용. 또한, 분할정복 코드에서 많이사용 (큰 문제를 쪼개서 합치면서 문제를 해결하는 락드릴에서 재귀함수를 사용하면 쉽게 해결가능. 분할정복도 같은 맥락)
function factorial(n){
    if (n <= 1){ //종료조건. 종료조건이 없으면 무한반복 됨.
        return 1
    }
    return n * factorial(n - 1)
}
factorial(5)

let result = 1;
for (let i = 1; i < 6; i++) {
    result *= i
}
console.log(result)

/*
5! = 5 * 4 * 3 * 2 * 1

                n       n <= 1      return
factorial(5)    5       false       5 * factorial(4) = 120
factorial(4)    4       false       4 * factorial(3) = 24
factorial(3)    3       false       3 * factorial(2) = 6
factorial(2)    2       false       2 * factorial(1) = 2
factorial(1)    1       true        1
*/

//누적합의 경우 아래 코드들이 좋은 코드는 아닙니다.
function 누적합(n){
    if (n <= 1){ //종료조건. 종료조건이 없으면 무한반복 됨.
        return 1
    }
    return n + 누적합(n - 1)
}
누적합(100)

let result = 0;
for (let i = 1; i < 101; i++) {
    result += i
}
console.log(result)

//순회를 돌지 않고 해결할 수 있으면 돌지 않고 해결합니다. 얘가 훨씬 좋은 코드.
let n = 100
console.log(n * ( n + 1) / 2); //수학 공식 사용. 

//재귀함수로 문자열을 뒤집는 코드를 작성하세요
function reverse(txt) {
    if (txt.length <= 1) {
        return txt
    }
    return reverse(txt.slice(1)) + txt[0]
}
reverse('hello world');

/*
참고사항
'hello'.slice(1)
'ello'

n                   txt.length <= 1         return
reverse('hello')    false                   reverse(txt.slice(1)) + 'h' = 'olleh'
reverse('ello')     false                   reverse(txt.slice(1)) + 'e' = 'olle'               
reverse('llo')      false                   reverse(txt.slice(1)) + 'l' = 'oll'            
reverse('lo')       false                   reverse(txt.slice(1)) + 'l' = 'ol'                      
reverse('o')        true                    'o'                      
*/

txt='hello world'
result = ''
for(const i of txt) {
    result = i + result
}
console.log(result);


//지역변수와 전역변수
// 스코프에 대한 좋은 글
// https://velog.io/@bico/JavaScript-%EB%A0%89%EC%8B%9C%EC%BB%AC-%EC%8A%A4%EC%BD%94%ED%94%84lexical-scope
//블록레벨 스코프: 함수뿐만 아니라 모든 코드 블록 내에서 지역 스코프를 생성하는 것. 모든 코드 블록(함수,if문,for문,while문,try/catch문 등)내에서 선언된 변수는 코드 블록 내에서만 유효하며 코드 블록 외부에서는 참조할 수 없다. 
if(true) { //for문이어도 마찬가지입니다.
    let x = 10;
    const y = 10;
}
console.log(x, y) //에러

//함수레벨 스코프: 함수의 코드 블록 내에서만 지역 스코프를 생성하는 것, 함수 내에서 선언된 변수는 함수 내에서만 유효하며 함수 외부에서는 참조할 수 없다.
let x = 100 //x는 전역 변수로 어디서든지 참조가능. 따라서, 함수 내부에서도 접근 가능합니다.
function xplus() {
    x = x + 10 //밖에 있는 변수를 만져서 +10을 할 수 있음.
}
xplus()
console.log(x)

//함수가 종료된 다음 선언된 변수는 휘발됩니다.
function xplus() {
    let x = 100
    x = x + 10 //함수가 종료되면 메모리 반환. 효율이 좋아짐.
}
xplus()
console.log(x) //출력 불가. x가 정의되지 않았음. 함수가 끝나면 메모리 주소를 잡았던 것을 다 풀음(반환됨). 그래서 x가 휘발되는 것. x를 굳이 사용하고 싶으면 return해서 사용해야 함.

//함수 안에 함수
function a() {
    console.log('a 실행')
    function b() {
        console.log('b 실행')
    }
    //b() //이게 있어야 b 실행이 출력됨.
}

a() // 'a 실행'이 출력됨.
b() //실행 불가. b는 접근이 불가능한 함수. 블록 안에서 선언된 변수나 함수는 밖에서 꺼내서 쓸 수 없다. 안에 있는 함수를 꺼내서 쓰는 것이 closer

//화살표 함수
//https://ko.javascript.info/arrow-functions-basics
function 함수1(x, y) {
    return x + y
}

let 함수2 = (x,y) => x+y 

함수1(10 ,10) //20
함수2(10, 20) //30
함수1.name;
함수2.name;
console.dir(함수1);

function 함수1(x, y) {
    let z = x + y
    return z 
}

let 함수2 = (x,y) => {
    let z = x + y
    return z // {}안에서는 return 생략 불가?
}

// 함수와 화살표 함수의 차이점. 호이스팅이 다름.
// 35번 파일로 이어집니다.
