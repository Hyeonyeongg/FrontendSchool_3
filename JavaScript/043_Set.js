// 집합, 합집합, 교집합, 차집합
// 집합은 중복을 허락하지 않음.

let s = new Set('abcdeeeeeeeee'); 

console.log(s); //{'a', 'b', 'c', 'd', 'e'} 중복이 제거됨.
console.log(s.size);

// 문제
회사게시판 = ['이호준', '이호준', '이호준', '김은하', '김은하', '이준근']

//문제 1 : 몇 명이 게시판에 게시물을 썼나요?
let set = new Set(회사게시판); //{'이호준', '김은하', '이준근'}
set.size;
//문제 2 : 각각의 몇 개의 게시물을 작성하였나요?
for (const i of set) {
    console.log(i, 회사게시판.filter(e => e === i))
}

for (const i of set) {
    console.log(i, 회사게시판.filter(e => e === i).length)
}

//서현주님 코드
let map = new Map();
for (const i of 회사게시판) {
    map.set(i, (map.get(i) || 0) + 1); //순회 돌면서 해당 key 값을 업데이트 해주는 식
}

// 서현주님 코드 설명
map.set('이호준', (map.get('이호준') ||  0) + 1)
// => map.set('이호준', 1)
map.set('이호준', (map.get('이호준') ||  0) + 1)
// => map.set('이호준', 2)
map.set('이호준', (map.get('이호준') ||  0) + 1)
// => map.set('이호준', 3)
map.set('김은하', (map.get('김은하') ||  0) + 1)
// => map.set('김은하', 1)


let s = new Set('abcdeeeeeeeee'); 
s.size;
s.add('f');
s.has('a');

// Set을 순환하기
for (let variable of s) {
    console.log(variable);
}

// 값이 배열인 경우 중복을 제거하고 출력해줌.
let ss = new Set('abcdeeeeeeeee'.split('')); //['a', 'b', 'c', 'd', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e']
console.log(ss);

let a = new Set('abc');
let b = new Set('cde');
// 교집합 (c)
let cro = [...a].filter(value => b.has(value)) //a를 전개한 코드중에서 필터를 해줌. b에서 이 value를 가지고 있느냐
// 합집합
let union = new Set([...a].concat(...b)) //concat은 배열과 배열로 이어붙이는것. let a = [1, 2, 3], let b = [4, 5, 6]을 해서 a.push(b)히면 [1, 2, 3, Array(3)]이렇게 되버림. a.push(...b)로 하면 가능. a.concat(...b)도 가능 [4, 5, 6]대괄호를 뿌시고 값만 가져오는 느낌.
// 차집합(a의 차집함은 ab b의 차집합은 de)
let dif = new Set([...a].filter(x => !b.has(x))); //b에서 가지지 못한 것만 출력하게 함. 따라서, a,b가 출력됨.