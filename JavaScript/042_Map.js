let m = new Map() //생성자 함수를 사용해서 m은 마치 오브젝트의 this를 받는 것처럼 작동함.
m.set('하나', 1)
    .set('둘', 2)
    .set('셋', 3)
    .set('넷', 4)
    .set(true, '트루') //.찍어서 계속 연결시키는 것을 메서드 체이닝이라고 함.
    .set([1, 2], '리얼리?')

console.log(m) //{'하나' => 1, '둘' => 2, '셋' => 3, '넷' => 4, ...}
console.log(m.get('하나')) //1
console.log(m.get(true)) //object에서 가능하지 않습니다.
console.log(m.get([1, 2]) //이렇게는 호출되지 않습니다. 새로운 [1, 2]를 가리킴. 7번째 줄의 [1, 2]와 메모리 주소가 다름.

//python VS JavaScript
//1. python
//python에서 아래 값은 다르게 나옵니다.
// x = [1, 2]
// id(x)
// y = [1, 2]
// id(y)

// x == y //python에서는 true
// x is y //python에서는 false

// 2. JavaScript
// [1, 2] === [1, 2] //false
// [1, 2] == [1, 2] // false
// let x = [1, 2]
// let y = [1, 2]
// x == y // false 마치 파이썬의 x is y와 비슷함.
// x === y // false

let m = new Map();
let test = [1, 2];
m.set('하나', 1)
    .set(true, '트루') 
    .set(test, '리얼리?') //이렇게는 호출됩니다. (하지만, 이렇게 밖에 있는 것을 가져오는 경우는 많이 없음.)

console.log(m.get(test)) //변수에 할당하면 같은 메모리 주소값을 바라보고 있음.


//Map에 해당 key값이 있는지 확인하기
m.has('하나'); //true
m.has('열'); //false

//Map에 값을 제거하기
m.delete('하나');
m.has('하나'); //지워졌기 때문에 false가 나옴

//Map의 크기 구하기 (object는 length가 없음)
m.size;

let data = {'one':1, 'two':2}
data.length //오브젝트에는 이런거 없음.
console.dir(data) //확인해보면 length가 없음을 알 수 있음.


//기존의 자료형을 map으로 바꾸고 싶다면? (사실, 처음부터 map으로 만드는 것이 좋음)
let data = new Map([['one', 1], ['two', 2]]); //가능. map은 순서가 있는 객체임. Map은 순회가 있는 객체에서만 작동함.
let data = new Map(Object.entries({'one':1, 'two':2})) //이렇게 하면 가능함.
let data = new Map({'one':1, 'two':2})// 불가능
let data = new Map('hello world'); //불가능
let data = new Map([10, 20, 30, 40]); //불가능. [['one', 1], ['two', 2]]이런형태로 만들어야 함. (각 요소가 키-값 쌍인 배열만 가능)

// 직접 순회가 가능한 Map
let data = {'one':1, 'two':2}; 
for (const i of data) { //오브젝트는 순회 불가. 작동되지 않음. Object.entreis(data)이런식으로 해줘야함.혹은 keys, value 등.
    console.log(i) 
}


let m = new Map();
m.set('하나', 1)
    .set('둘', 2)
    .set('셋', 3)
    .set('넷', 4)

for (const i of m) {
    console.log(i) // ['하나', 1]...
}

for (const [i,j] of m) { //구조분해할당
    console.log(i, j)
}

m.keys()
m.values()
m.entries() //Map은 순회가 되니까 딱히 entreis를 할 필요는 없음.

//Map - Object 간의 형 변환
let 맵 = new Map(Object.entries({'one':1, 'two':2})) //map으로 변환
let 오브젝트 = Object.fromEntries(맵); //오브젝트로 변환 (잘 안씀)

//맵은 키값의 중복이 되지 않음. (참고, 오브젝트의 키는 문자열과 심볼만 가능함.)
let map = new Map();
map.set('이호준', 1)
map.set('이호준', 2)
map.set('이호준', 3)
map //{'이호준' => 3}만 들어가 있음. 