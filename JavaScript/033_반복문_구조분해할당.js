let value = [10, 1, 100, 200, 300, 10];

let value2 = {
    one: 1,
    two: 2,
    three: 3,
    four: 4,
}

Object.keys(value) // ['0', '1', '2', '3', '4', '5']

Object.keys(value2) // ['one', 'two', 'three', 'four']


for (i in value2) { //키가 출력됨.
    console.log(i)
}

for (i of value2) { //불가능. 객체는 for of로 순회를 돌 수가 없음. 그런데, of(배열의 값을 출력)로 순회를 돌아서 key와 value를 한꺼번에 출력하고 싶다면?
    console.log(i)
}

Object.entries(value) //entries는 [key, value] 쌍으로 이루어진 배열을 반환
Object.entries(value2) // [['one', 1], ['two', 2], [three', 3], ['four', 4]]

for (i of Object.entries(value2)) { //value2는 entries에 의해 배열 상태로 반환되고. for of에 의해 배열에 있는 값이 출력됨.
    console.log(i) //['one', 1] ['two', 2] ['three', 3] ['four', 4]
}

for (i of Object.entries(value2)) {  //아래에 나오는 구조 분해 할당이 조금더 보기 좋고 간편함.
    console.log(`key는 ${i[0]}고 value는 ${i[1]}입니다.`)
}

for ([i, j] of Object.entries(value2)) {  //구조 분해 할당(for문에서만 쓰이는 것이 아님)
    console.log(`key는 ${i}고 value는 ${j}입니다.`)
}

for([i, j] of [[10, 20], [30, 40]]) {
    console.log(i, j)
} 

for([i, j] of [[10, 20, 300], [30, 40, 500]]) {
    console.log(i, j) //300과 500을 받지 못함.
} 

for([i, j, ...k] of [[10, 20, 300, 1, 2], [30, 40, 500, 1]]) {
    console.log(i, j, k) //몇 개 들어올지 모르는 경우 스프레드 용법 사용(이런 경우는 많이 없음. 거의 쓰지 않음) i와 j에 들어가지 못하는 값들 [300, 1, 2], [500, 1]은 k에 전개되어서 들어감.
} 

for([[i, j],k] of [[[10, 20], 300], [[30, 40], 500]]) {
    console.log(i, j, k)
} 

for([i, j] of [[[10, 20], 300], [[30, 40], 500]]) { //[10, 20]이 i가 되고 300이 j가 됨.
    console.log(i, j)
} 

// 일반 변수의 구조 분해 할당
let a, b, c
[a, b] = [10, 20]

let one, two, three
[one, two, three] = '010-5044-2033'.split('-') //['010', '5044', '2033']

let one1, two1, three1, four1
[one1, two1, three1, four1] = '010-5044-2033-0000'.split('-')
[one1, two1, three1, ...four1] = '010-5044-2033-0000-01-02-03'.split('-') //0000 01 02 03을 잃어버리면 안되니까  four1을 통해 전개해서 받아줌.


// 구조분해할당 문제입니다.
data = [10, 20, 30, 40, 50]
//문제1 (x)
// a, b, c로 각각을 분해할 것입니다.
// a에는 10, b에는 20, 30, 40, c에는 50을 할당해보세요.
[a, ...b, c] = [10, 20, 30, 40, 50] //(x)
[a, b, c] = [data[0], [data[1], data[2], data[3]], data[4]]; // (O)

// 문제2 (x)
// a, b, c로 각각을 분해할 것입니다.
// a에는 10, 20, 30 b에는 40, c에는 50을 할당해보세요.
[...a, b, c] = [10, 20, 30, 40, 50] //(x)
[a, b, c] = [[data[0], data[1], data[2]], data[3], data[4]]; // (O)

//문제3 (정상 작동. 스프레드는 마지막에만 사용할 수 있습니다)
// a, b, c로 각각을 분해할 것입니다.
// a에는 10, b에는 20, c에는 30, 40, 50을 할당해보세요.
[a, b, ...c] = [10, 20, 30, 40, 50]


//Object 구조 분해 할당.
let data = {
    name: 'hojun',
    age : 10,
    money: 100
}

let {name, age} = data //name에 'hojun' age에 '10' 이 들어감.

let {name, age} = {name: 'hojun', age: 10 } //이렇게도 가능. 동일한 이름이 있을 때 값을 뽑아서 넣어줌.

let data = {
    name: 'hojun',
    age : 10,
    money: 100,
    company: 'weniv'
}

let {name, age, ...rest} = data //money와 company를 rest가 받음.

// 순서를 뒤바꿔 봅시다.
let data = {
    name: 'hojun',
    money: 100,
    company: 'weniv',
    age : 10,
}

let {name, age, ...rest} = data //rest에는 money와 company가 들어감. 같은 이름을 찾아서 매핑하고 나머지는 rest에 들어감.

// RORO 기법 (함수에 아규먼트로 값을 전달할 때 오브젝트로 전달하게 되면 조금더 가독성이 높아지는 코드를 작성할 수 있다. 추후 학습 예정)
// RORO 기법 등의 디자인 패턴에서도 구조분해할당을 많이 사용합니다.

//스프레드 문법
let a = [10, 20, 30]
a.push(100)
a.unshift(1000)

let a = [10, 20, 30]
a = [1000, ...a, 100] //이렇게도 가능

let a = [1, 2, 3]
let b = [10, 20, 30]
let c = [...a, ...b] //이렇게 합쳐진 값을 다시 구조분해할당 할 수도 있음.

let str = 'hello world'
console.log([str]); //배열로 출력됨. ['hello world']

let str = 'hello world'
console.log([...str]); //하나씩 잘려나감. ['h', 'e', ...]

'!'.repeat(10);
[...'!'.repeat(10)]; //배열에 !가 채워짐.
