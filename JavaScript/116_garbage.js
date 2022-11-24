let me = {age: 30}; //값 할당. me에는 객체가 저장되어있는 주소(참조)가 들어있음.
let you = me; //you에도 객체에 대한 참조가 들어있음. 최종적으로 객체의 참조카운트는 2! me,you가 참조하고 있음.

me = null; //공간을 비워줌. 참조카운트 : 1
you = null; //참조카운트: 0 (객체는 가비지컬렉터의 대상이됨.)


///////////////////////////////////////////////
let x = {
    y : {
        z : 1
    }
} 
//x가 참조하는 객체를 object1, y가 참조하고 있는 객체를 object2라고 하겠습니다.

let a = x //object1의 참조카운트는 2 (x, a)
x = 1; //onject1의 참조카운트는 1 (a)

let b = a.y //object2의 참조카운트는 2 (a.y, b)
a = 2; //object1의 참조카운트는 0  () 가비지컬렉션 대상이 됨. 하지만, object1이 가지고 있는 object2는 아직 참조하고 있는 애들이 존재. 그래서 이런 경우에는 object1이 가비지컬렉션 대상이 되도 객체가 제거되지 않음. 안에 또 다른 가지고 있는 애들을 참조하고 있는 애들이 존재하기 때문. 
// 이렇게 불필요하게 남아있는 object1 객체가 존재하는 경우 메모리 누수(memory leak)가 발생했다고 표현합니다.
//예전에는 객체끼리 서로 맞물려있어 제거되지 않던 문제(순환 참조 문제)가 있었지만 최신 브라우저에서는 마크스위프(Mark and Sweep) 알고리즘을 사용하여 이런 문제가 해결되어 있습니다.


//////////////////////////////////////////////////////
//클로저가 메모리 관리에 문제가 있음. 

function outer() {
    let privateVal = ['test']; //리턴되는 순간 outer함수가 사라지지만 얘는 getPrivate함수에서 사용하기 떄문에 outer함수는 사라져도 안에있는 얘는 사라지지 않음. 가비지컬렉터입장에서 outer은 지우는게 맞는데 privateVal은 지울 수 없음. 얘는 가비지컬렉터의 대상이 되지 않음.

    function getPrivate() {
        return privateVal
    }

    return getPrivate;
}

const getPrivateData = outer();
const secretVal = getPrivateData(); //29번째 줄에 있는 privatevAL을 리턴함

console.log(secretVal);

// secretVal = null;
// secretVal = undefined; 
//클로저 패턴을 이용했을 때 비공개변수를 사용했다면 반드시 나중에 이 값을 비워줘야함. null을 할당한다던지 undefined를 할당해줘야함. 가비지컬렉터는 null과 undefined를 구별하지 않음. 그냥 참조가 끊어졌는지 않끊어졌는지가 중요. 클로저를 이용할 떄는 사용한 비공개변수를 해제해줘야한다. 그렇지 않으면 비공개 변수가 계속 남아있게 된다. 


///////////////////////////////////////////////////////////////////
let aespa = ["카리나", "윈터", "지젤", "닝닝"];
// aespa.forEach((item ,index)=> {
//     aespa[index] = item+'💖'
// })

// console.log(aespa); //원본 배열이 변경됨.

const aespa2 = aespa.map((item) => {
    return item + '💖'
})

console.log(aespa);
console.log(aespa2);