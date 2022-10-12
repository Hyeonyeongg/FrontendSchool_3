//함수를 호출해준 애가 this가 됨. 
function a() {  // 함수 a는 window에 등록된 상태이기 때문에 this가 window를 가리키고 있음.
    console.log(this) 
}
a(); // window가 출력됨. 얘는 실제로 window.a()임. 윈도우객체가 가지고 있는 a임. 마찬가지로, 변수(var의 경우만)를 선언해도 사실은 윈도우에 등록되는 것.


function b() {
    console.log('hello world')
}
b()
window.b()

let test = {
    one: 1,
    two: 2,
    three: function() { //three가 마치 함수 이름이 되는것.
        console.log(this);
    }
}
//test를 호출한 애는 window.
test.three() //three를 호출하는 애는 test. 따라서 15번째 줄의 this는 test임.

let test2 = test.three; 
test2() //윈도우가 나옴. 전역객체가 test2를 호출하고 있기 때문에 window가 출력됨. 자신을 호출한 것을 this로 출력한다.


//추가 예제(핵심)//
function sayName() { //window.sayNmae(). window에 등록됨.
    console.log(this.name);
}
var name = 'Hero'; //윈도우에 등록된 것 window.name을 하면 'Hero'가 나옴. 이렇게 var로 변수를 선언하면 window에 등록됨. let과 const는 아님. 

let peter = {
    name: 'Peter Parker',
    sayName: sayName
}

let bruce = {
    name: 'Bruse Wayne',
    sayName: sayName //sayName()이라고 적으면 함수가 호출되는 것. sayName에 리턴값이 들어감.
}

sayName() //Hero가 나옴.
peter.sayName(); //Peter Parker. 피터의 세이네임을 하게 되면 피터의 sayNmae이 함수 sayNmae과 연결되어있어서 함수 sayNmae을 호출해줌. 여기서, this는 peter가 됨. 나를 호출한 애가 peter여서 peter에 들어있는 name인 Peter Parker가 출력됨. 즉, sayName의 this.name에서 this가 peter이 되는 것임. 
bruce.sayName(); //Bruce Wayne .앞에 있는 것이 this라고 생각하기. 
///////////////

function a() {
    console.log(this.name);
    function b() {
        console.log(this.name);
    }
    b()
}
a() //console.log 둘다 빈공간이 나옴. 

function a() {
    console.log(this);
    function b() {
        console.log(this);
    }
    b() //얘를 호출하는 주체가 없음. a.b()이렇게 된게 아님.
}
a() //둘다 윈도우가 나옴. b()는 a에서 호출한건데 왜 윈도우? .을 찍어서 자기 자신을 가리키는 메서드를 가리켜줘야함. (peter.say()처럼). 

function a() {
    console.log(this);
    function b() {
        console.log(this);
        function c() {
            console.log(this);
        }
        c() 
    }
    b()
}
a() //마찬가지로 다 윈도우가 출력됨.
//즉, 함수 안에 있는 함수를 호출할 때 .을 붙이지 않고 호출하면 this는 window가 되고, .을 붙이고 출력하면 . 앞에 있는 애가 this가 된다.
//a.b.c.d.e.say() //say는 e를 this로 가짐. 


function sayName(){
    console.log(this);
}

var c = {
    'hello':'world',
    'say': sayName
}

var b = {
    'c':c
}

var a = {
    'b':b
}

a.b.c.say() //this는 c. {hello: 'world', say: ƒ}가 출력됨.


