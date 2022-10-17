console.log('0' == 0) //true
console.log('0' === 0) //false

console.log(1 == true) //true
console.log(1 === true) //false

console.log(0 == false) //true
console.log(0 === false) //false

console.log('true' == true) //false
console.log('true' === true) //false
// 1. json에서 값을 가져올 때 true 문자열로 가져와서 error가 난 적이 있습니다.
// 2. json에서 값을 가져올 때 true가 True로 되어 있어서 error가 난 적이 있습니다.


console.log(0 == '') //주의 : true
console.log(0 === '') //주의 : false

console.log(false == '') //주의 : true
console.log(false === '') //주의 : false

console.log(false == null) //주의: false
console.log(false === null) //주의: false

console.log(false == undefined) //주의: false
console.log(false === undefined) //주의: false

// 아래 내용이 많아서 별도 파일로 분리하여 설명해드리겠습니다.
console.log(NaN == NaN) //주의: false
console.log(NaN === NaN) //주의: false



function truthyAndFalsy(value) {
    return !!value //이 로직은 정확하게 우리가 알 수는 없음.
}

truthyAndFalsy([]) // 주의 : true (length라는 값을 가지고 있음)
truthyAndFalsy({}) // 주의 : true
truthyAndFalsy('') // 주의 : false 
truthyAndFalsy(null) // 주의 : false 
truthyAndFalsy(undefined) // 주의 : false 
truthyAndFalsy(NaN) // 주의 : false 
truthyAndFalsy(Infinity) // 주의 : true

truthyAndFalsy(-100) // true
truthyAndFalsy('hello') // true


//수식을 생략할 때 드모르간 법칙 사용.
console.log('----------------');
console.log('드모르간 법칙');

// 만약, notB가 항상 false면 and니까 곱하면 0(무조건 false)이므로 이 수식 자체가 필요없는것. 그럼 이 수식을 할 필요가 없음. 그럼 수식을 지울 수가 있음.
// not (A or B) = (not A) and (not B)
// not (A and B) = (not A) or (not B)

// 아래의 수식이 굉장히 복잡하다고 했을 때 뒤에 수식이나 앞에 수식을 봤을 때 항상 true이거나 false인것이 있다면 전체 로직의 평가가 달라질 수 있음. 
// 3의 배수와(또는) 5의 배수가 아닌 것인데 3의 배수가 아닌것 동시에 5의 배수가 아닌것으로 바꿔볼 수 있음. 드모르간으로 바꿔보면서 뒤에평가식이 false면 아예 조건식이 필요없는것
// !(a % 3 == 0 || a % 5 == 0) // 아래 코드와 같습니다.
// !(a % 3 == 0) && !(a % 5 == 0) // 위 코드와 같습니다.
for (let i = 0; i < 100; i++) {
    if (!(i % 3 == 0 || i % 5 == 0)) {
        console.log(i)
    }
}

for (let i = 0; i < 100; i++) {
    if (!(i % 3 == 0) && !(i % 5 == 0)) {
        console.log(i)
    }
}

// or : ||
// and : &&
const x = 0;
const y = 1;
console.log(!(x || y) === (!x && !y));
console.log(!(x && y) === (!x || !y));

// 카오스
console.log([] == ![]) //true
console.log([] == 0) //true

// 1. 빈 Array는 비교구문이 나왔을 때 강제로 숫자로 형변환이 됩니다.
console.log(0 == ![])

// 2. ![] == false입니다.
console.log(0 == false)

// 3. false는 0으로 평가됩니다.
console.log(0 == 0)
