/*
new Promise((resolve, reject) => {
        //code
    })
    .then(result => result)
    .then(result => result)
    .catch(err => err)
    .finally(result => result) //무조건 실행
*/

// 데이터를 요청하는 중. 데이터를 받아온것. 성공한 것
// 데이터를 요청하는 중. 데이터가 거부됐음. 실패한 것
// - pending(대기상태) - resolve(해결) - fulfilled(성공)
// - pending(대기상태) - reject(거부) - rejected(실패)


// resolve
//Promise를 만드는 순간 우리가 전달한 excutor(resolce, reject)라는 콜백함수가 바로 실행됨.
let p = new Promise(function(resolve, reject){
    // 비동기적으로 실행될 code 작성
    resolve('hello world') //resolve는 성공. resolve되면 then이 받음. 
}).then(메시지 => { //여기서 'hello world'를 받음. 'hello world'를 받는 파라미터를 선언해주면 됨. 이걸 받아서 무엇을 할 것인지 적어주면 됨.(비동기적으로 실행될 코드들의 순서)
    alert(메시지)
    return 메시지.split(' ')[0]
}).then(메시지 => { //return값이 메시지로 들어감. hello가 들어옴
    alert(메시지)
    return 메시지[0]
}).then(메시지 => { //return값이 메시지로 들어감. h가 들어옴.
    alert(메시지)
    return 메시지
})

console.log(p) // 위의 프로미스와 같이 p를 바로 출력하면 pending이 출력됨.
console.log(p)  // 그 다음에 또 p를 출력해보면 fulfilled가됨


// reject
let p = new Promise(function(resolve, reject){
    // 비동기적으로 실행될 code 작성
    reject('hello world')  //reject되면 catch가 받음.
}).then(메시지 => { 
    alert(메시지)
    return 메시지.split(' ')[0]
}).then(메시지 => { 
    alert(메시지)
    return 메시지[0]
}).then(메시지 => { 
    alert(메시지)
    return 메시지
}).catch(메시지 => { //reject되었을 때는 catch가 받음.
    alert('catch 실행!!');
}) 

console.log(p) 
console.log(p) 

// reject는 rejected(실패)된 Promise를 반환
let p = new Promise(function(resolve, reject){
    // 비동기적으로 실행될 code 작성
    reject('hello world')
})
console.log(p) //Promise {<rejected>: 'hello world'}

// rejected(실패)된 Promise를 catch로 받으면 fulfilled 반환(끝까지가면 어쨌든 성공한게 되는것)
let p = new Promise(function(resolve, reject){
    // 비동기적으로 실행될 code 작성
    reject('hello world')
}).catch(메시지 => {
    alert('catch 실행!!')
})
console.log(p)

// rejected(실패)된 Promise를 catch로 받으면 fulfilled 반환(return 값 준 경우)
let p = new Promise(function(resolve, reject){
    // 비동기적으로 실행될 code 작성
    reject('hello world')
}).catch(메시지 => {
    alert('catch 실행!!')
    return 'catch!!'
})
console.log(p)


// resolve인데 중간에 error가 던져졌을 때
let p = new Promise(function(resolve, reject){
    // 비동기적으로 실행될 code 작성
    resolve('hello world') 
}).then(메시지 => { 
    alert(메시지)
    return 메시지.split(' ')[0]
}).then(메시지 => { 
    alert(메시지)
    throw Error('Error 발생! 경고경고!'); //중간에 throw를 만나게되면? 89번째줄 hello wolrd가 실행되고 92번째 hello가 실행되고 93번째 줄에서에러를 만나면 그 다음의 then을 실행하지 않고 catch가 실행됨. (만약 87번째 코드가 reject였다면 바로 catch로 이동함.)
    return 메시지[0]
}).then(메시지 => { 
    alert(메시지)
    return 메시지
}).catch(메시지 => { //reject되었을 때는 catch가 받음.
    console.log(메시지) //throw에 적은 에러 메시지가 들어옴.
    alert('catch 실행!!')
}) 

console.log(p) 


// 예제를 위한 예제, 이런식으로 처리하지 않습니다.
let p = new Promise(function(resolve, reject){
    // 비동기적으로 실행될 code 작성
    resolve('hello world') 
}).then(메시지 => { 
    alert(메시지)
    return 메시지.split(' ')[0]
}).then(메시지 => { 
    alert(메시지)
    throw Error('Error 발생! 경고경고!'); 
    return 메시지[0]
}).then(메시지 => { 
    alert(메시지)
    return 메시지
}).catch(메시지 => { 
    console.log(메시지) 
    alert('catch 실행!!')
}).then(메시지 => { //then이 실행됨. 위의 함수에서 반환하는 값이 없으므로 undefiend를 받음.
    alert('catch 이후에 then')
    throw Error('Error 발생! 경고경고!')
}).catch(메시지 => { 
    console.log(메시지) 
    alert('catch 이후에 then 이후에 catch 실행!!')
})

console.log(p) 

//일부러 시간이 좀 걸리게 작업을 해보도록 하겠습니다.
let p = new Promise(function(resolve, reject){
    setTimeout(()=>resolve('끝났다!'), 3000)
})
console.log('hello world')
console.log(p) //3초 전에는 pending으로 나오고 3초가 지나면 fullfilled로 뜸.

//3초후에
console.log(p)

//실행하지마세요. pending에 빠집니다. resolve, reject가 코드블록 안에 없어서 누구를 잡아야될지 모름.
// let p = new Promise(function(resolve, reject) {
//     console.log('hello world')
// }).then(d => console.log(d)).catch(e => console.log(e));


//finally
let p = new Promise(function(resolve, reject){
    // 비동기적으로 실행될 code 작성
    resolve('hello world') 
}).then(메시지 => { 
    alert(메시지)
    return 메시지.split(' ')[0]
}).then(메시지 => { 
    alert(메시지)
    throw Error('Error 발생! 경고경고!'); //캐치로 이동
    return 메시지[0]
}).then(메시지 => { 
    alert(메시지)
    return 메시지
}).catch(메시지 => { //캐치실행
    console.log(메시지) 
    alert('catch 실행!!')
}).finally(메시지 => { //무조건 실행(마무리하는 용도로 사용). then catch정도만 작성하고 finally는 작성하지 않은 경우도 많음. but관습적으로 마지막에 쓰는 것이지 뒤에 이어붙이는 것이 안되는 것은 아닙니다.
    alert('catch 이후에 finally') 
    throw Error('Error 발생! 경고경고!')
}).catch(메시지 => {  //실행 안됨.
    console.log(메시지) 
    alert('catch 이후에 then 이후에 catch 실행!!')
})

// 우리가 배울 async나 fetch도 Promise를!?
let test = async function() {
    return 'hello world'
}
console.log(test);
console.log(test()); //프로미스가 반환됨. 

let data = fetch('http://test.api.weniv.co.kr/mall')
console.log(data) //프로미스가 출력됨.

//따라서 이렇게 작성할 수 있음.
fetch('http://test.api.weniv.co.kr/mall')
    .then(메시지 => { 
        console.log(메시지)
        return 메시지.json() //리턴한 값은 다음 then이 받을 수 있음.
    })
    .then(메시지 => {
        console.log(메시지)
    })
    .catch(메시지 => { //에러 메시지가 들어옴. (정상작동되면 필요없는 코드. 하지만 있어야하는 코드. 에러발생했을 경우의 나올 수 있는 모든상황을 고려해서 코딩을 해줘야함.)
        // alert(메시지) //유저한테 굳이 어떤 에러인지 보여줄 필요는 없음. 따라서 아래와 같이 작성함.
        alert('홈페이지가 정상적으로 작동하지 않고 있습니다. 조치중이오니 잠시만 기다려주시기 바랍니다.')
        console.log(메시지)
    })


//프로미스 체이닝의 다른 형태(이렇게 나올 수 있다 정도로만 이해)
//모던 자바스크립트 예제
let p = new Promise(function(resolve, reject) { //비동기 프로그래밍으로 짠 코드는 별개로 움직임. 10초후에 resovle(1)이 209번째의 result로 넘어감.
    setTimeout(() => resolve(1), 10000); // (*)
});

console.log('hello world'); //중간에 있는 코드는 실행이 됨.
// code 1000줄

let p2 = p.then(function(result) { // (**) p에 then한 것을 p2에 넣음. 
    console.log(result); // 1
    return result * 2; //215번째의 result로 넘어감.
});

console.log('hello world2');
// code 1000줄

let p3 = p2.then(function(result) { // (***) p2에 then한 것을 p3에 넣음
    console.log(result); // 2
    return result * 2; //223번째의 result로 넘어감.
});

console.log('hello world3');
// code 1000줄

let p4 = p3.then(function(result) { //p3에 then한 것을 p4에 넣음.
    console.log(result); // 4
    return result * 2;
});


// 프로미스 체이닝이 아님! (문어발 처럼 동시에 진행됨)
let promise = new Promise(function(resolve, reject) {
    setTimeout(() => resolve(1), 1000);
});

promise.then(function(result) {
    alert(result); // 1
    return result * 2;
});

promise.then(function(result) {
    alert(result); // 1
    return result * 2;
});

promise.then(function(result) {
    alert(result); // 1
    return result * 2;
});