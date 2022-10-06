//https://ko.javascript.info/nullish-coalescing-operator
let firstName = null;
let lastName = null;
let nickName = "바이올렛";
// null이나 undefined가 아닌 첫 번째 피연산자
console.log(firstName ?? lastName ?? nickName ?? "익명의 사용자"); // 바이올렛이 출력됨. null이면 넘어감. nickname이 null이 아니기 때문에 nickname을 출력해주는 것.

// let a = 10;
// let b = 20;
// let c = 30;
// let d = a ?? b ?? c; //10이 나옴. 

// let a = null;
// let b = 20;
// let c = null;
// let d = a ?? b ?? c; // 20이 나옴. a가 null이거나 undefiend 둘 중 하나면 뒤로 넘어감.

// let a;
// let b;
// let c;
// let d = a ?? b ?? c; //d에 undifined가 들어감.

//카카오톡
let 실명;
let 별명 = 'licat';
let 기본값 = '프로도';

let 채팅창아이디 = 실명 ?? 별명 ?? 기본값;


// ||과 ??의 차이점
let height = 0;
console.log(height || 100); // 100. ||의 경우, 앞에가 false면 뒤에 것을 봐야함. 앞에가 true면 뒤를 안봄. 따라서, 0은 false니까 뒤에 것을 봐서 100이 출력된 것.
console.log(height ?? 100); // 0 . height에 null이나 undefined가 아닌 0이라는 값이 있으니까 0을 반환함. (0을 0취급함)


// ||(에서 false인 것) : 0, null, undefined
// ??(에서 false인 것) : null, undefined

// falsy하다 : 0, null, undefined, "", NaN
// nullish하다 : null, undefined