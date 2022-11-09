import * as 개인프로필 from './003.js';
//003.js에 export하고 있는 모든(*) 것을 가져올건데 가져온 것에 개인프로필이라는 별칭을 붙여줌.
//import를 사용하려면 npm init --yes를 해서 .json파일의 type을 module로 수정해줘야 함.


console.log(개인프로필.이름);
console.log(개인프로필.나이);