try {
    // code
} catch(에러메시지) {
    // code
} finally {
    // code
}
//에러가 날 수 있는 여지가 있는 곳에 넣어주면 됨. 그게 어느곳인지 감이 안 오면 다 감싸줘야함.

// 보통은 이렇게 많이 던짐
//new Error(message);
//new SyntaxError(message);
//new ReferenceError(message);

try {
    let x = 10;
    let y = 20;
    console.log(x + y)
} catch(e) { //보통 에러메시지를 e라고 많이 사용함.
    console.error(e)
} finally {
    console.log('finally');
}

// 2개를 비교해보세요!
try {
    let x = 10;
    let y = 20;
    console.log(x + y +z)
} catch(e) { //에러 발생시 여기로.
    console.error(e)
} finally {
    console.log('finally'); //하지만 이 코드는 정상적으로 마무리 된것
}

try {
    let x = 10;
    let y = 20;
    console.log(x + y +z)
} catch(e) { //에러 발생시 여기로.
    console.log(e)
} finally {
    console.log('finally'); //하지만 이 코드는 정상적으로 마무리 된것
}


//에러를 던지고 스톱
let x = 10
let y = 20
console.log(x + y +z) //일부러 error를 만들었을 때. z의 값이 할당되어 있지 않아서 에러 발생함. 이렇게되면 서비스가 멈춤.
let z = 30 //할당되지 않았습니다. 서비스가 멈춥니다?!


//에러를 던지고 마지막까지 수행.
//얘를 사용하면 어쟀든 마지막것을 수행할 수 있음.
try {
    let x = 10;
    let y = 20;
    console.log(x + y +z)
} catch(e) { //에러 발생시 여기로.
    console.log(e) //브라우저에서 던져주는 에러.
} finally {
    // 서비스는 정상적으로 작동함. 대신 일부 기능이 수행이 안될 수도 있다.
    console.log('finally'); 
}

//try catch로 작성하지 않았을 때 a()에서 문제 발생되었을 경우,  b(), c()도 안됨.
//try catch로 작성하면 a()에서 문제 발생되었을 경우 a()는 안되지만 b(), c()는 동작함.
a() //로고 받아오기 메서드 - 길동
b() //상품 정보 받아오기 메서드 - 철수
c() //장바구니 구현 함수 - 둘리

//throw는 강제적으로 에러를 만들어서 에러를 던지는것. 
// e안에 메시지가 있는것
try {
    let x = 10;
    let y = 10;
    throw new Error('에러야!')
    console.log(x + y + z)
} catch(e) {
    console.error(e)
    console.dir(e)
    console.error(e.message)
} finally {
    console.log('end')
}

try {
    let x = 10;
    let y = 10;
    throw new SyntaxError('문법 애러야!')
    console.log(x + y + z)
} catch(e) {
    console.error(e)
    console.error(e.message)
} finally {
    console.log('end')
}


function sum(a, b){
    return a + b
}

// test code
// sum(1, 1)
// sum('1', 1)
// sum(1, '1')
// sum(undefined, null)
// ...

try{
    sum(1, 1)
}
