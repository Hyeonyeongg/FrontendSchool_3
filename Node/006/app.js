const path = require('path');
// import path from 'path'; //path는 노드 설치할 때 같이 설치됨. (구분자 오류가 나서 구버젼으로 사용함.)

// 공식문서 링크  : https://nodejs.org/dist/latest-v16.x/docs/api/path.html

console.log(`구분자 : ${path.sep}`); // 구분자는 OS마다 다르기 때문에 폴더나 파일 경로를 사용할 때 path.sep을 사용해주셔야 합니다.

console.log(path)
console.dir(path)

// let filename = 'C:\Users\paullab\Desktop\FE3\GitHub'
// console.log(`디렉토리 : ${path.dirname(filename)}`)
// console.log(`파일이름 : ${path.basename(filename)}`);
// console.log(`확장자 : ${path.extname(filename)}`);

//path 모듈을 사용하면 디렉토리, 파일이름, 확장자를 가져올 수 있음.
console.log(`디렉토리 : ${path.dirname(__filename)}`);
console.log(`파일이름 : ${path.basename(__filename)}`);
console.log(`확장자 : ${path.extname(__filename)}`);

console.log(__filename);
console.log(__dirname);
console.table(path.parse(__filename));
console.log(path.join(__dirname, 'source')); // 사용하세요. path.join은 시스템의 구분자로 합쳐줌. 이렇게 많이 사용함.
console.log(path.join(__dirname, 'app.js')); 
// console.log(__dirname+'/node'); // 사용하지 마세요.