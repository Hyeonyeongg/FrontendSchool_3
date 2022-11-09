const 개인프로필 = require('./003.js'); 
//require은 예전 문법.
//003.js에서 읽어와서 개인프로필로 넣음. 어떤 데이터나, 함수를 가져와서 이 안(002.js)에서 쓸 수 있도록 하는 것이 require. (요즘에는 import를 많이 사용함.)
// const 이호준개인프로필 = require('./003'); //이렇게 .js를 붙이지 않고 사용해도 작동함.

console.log(개인프로필);
console.log(개인프로필.이름);
console.log(개인프로필.나이);

