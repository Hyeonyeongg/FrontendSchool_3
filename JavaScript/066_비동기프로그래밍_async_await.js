// 모던 자바스크립트 예제
//async를 함수앞에 쓰면 코드블록이 자동으로 프로미스로 바뀜
async function f() {
    return 100;
}

f().then(alert); // 100 (then은 성공했을 때. ) alert가 콜백함수로 들어간 형태.


/////////////////////////////
async function f() { 
    return 'hello world';
}

f()
.then(메시지 => {
    alert(메시지)
    return 메시지.split(' ')[0]
})
.then(메시지 => {
    alert(메시지)
    return 메시지[0]
}); 

///////////////////

// 모던 자바스크립트 예제
async function f() {
    return 100;
}

f().then(alert); // 100

//////////////
//! !! hello world hello 순으로 실행됨. (v)
async function f() { 
    return 'hello world';
}
console.log('!')
f() 
.then(메시지 => {
    alert(메시지)
    return 메시지.split(' ')[0]
})
.then(메시지 => {
    alert(메시지)
    return 메시지[0]
}); 
console.log('!!')

/////////////////////
//await은 promise가 끝날때까지 기다림 (v)
async function f() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("완료!"), 1000) //1초 딜레이가 됨. 1초 기다린 다음에 완료를 넘겨줌.
    });

    let result = await promise; // 프라미스가 이행될 때까지 기다림 (*). 프로미스가 완료될때까지 아래코드도 기다리고 있음. 
    alert(result); // "완료!" 
}
f();

////////////////////// 
// 기다리지 않은 것
async function f() {

    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("완료!"), 1000)
    });

    let result = promise; // 프라미스가 이행될 때까지 기다리지 않음 (*). await이 없으면 promise 자체가 result에 들어감.  그래서 result는 프라미스를 자체를 alert로 보여줌.
    console.log(result); // pending이 나옴. 아직 완료가 안됐기 때문. 하지만 다 끝난다음에는 fullfilled가 됨. 
    alert(result); 
}

f();

////////// 
async function f() {

    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("완료!"), 1000)
    });

    let result = promise;
    console.log(result);
    alert(result); 
    return 'hello'
}

f();
//promise {<fulfilled>: 'hello'}

/////////////////// 

async function f() {

    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            alert("완료")
            resolve("완료!") //resolve되었을 때 result 값에 '완료'가 들어가야 하는데 await이 있어야 들어감.
        }, 1000)
    });

    let result = promise;
    console.log(result);
    alert(result);
    return 'hello' 
}

f();  //Promise {<fulfilled>: 'hello'}

///////////////////
/////////////////// 
function f() {

    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            alert("완료")
            resolve("완료!")
        }, 1000)
    });

    let result = promise;
    console.log(result);
    alert(result);
    return 'hello'
}

f(); //'hello'


//////////////////////
//error. awiat은 async function에서만 사용가능
function f() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            alert("완료")
            resolve("완료!")
        }, 1000)
    });

    let result = await promise; 
    console.log(result);
    return 'hello'
}

f(); 

//그래서 아래와 같은 형태로 예시를 만든 것입니다.
async function f() { //(v)

    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            alert("완료")
            resolve("완료!")
        }, 1000)
    });

    let result = await promise;
    console.log(result);
    return 'hello'
}

f();

///////////////////////

// async를 붙여야만 function이 프로미스를 반환함. (그래서 위의 예제들에서 promise가 두번 반환되는 것)
async function f() {
    return 'hello'
}
f(); //Promise {<fulfilled>: 'hello'}

////////////////////

async function f() { //(v)

    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            alert("완료-1")
            resolve("완료!")
        }, 1000)
    });

    let result = await promise; 
    alert(result+'완료-2');
    return 'hello'
}

f(); 

////////////////////
// 설명을 위한 예제(좋은 예제는 아님)
//async는 프로미스를 반환한다. await은 기다려준다. await은 async function안에서 사용할 수 있다.
async function f() {

    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            alert("완료-1")
            resolve("완료!")
        }, 1000)
    });

    let result = promise; 
    alert(result+'완료-2'); //기다리지 않았으니까 완료-2가 먼저 뜨고 그다음에 완료-1이 뜸
    return 'hello'
}

f(); 

////////////////
// 해당 코드 사용 가능합니다. 
const productData = await fetch('http://test.api.weniv.co.kr/mall').then((data) => data.json())