const fs = require('fs'); //기본적으로 노드를 설치하면 같이 딸려오는 애.

// rename, readFile, writeFile, appendFile, copyFile, mkdir

// 1 (파일 이름 바꾸기)
// let 변수 = '이호준' // test.txt 파일의 이름을 바꿈.
// let 날짜 = new Date()
// fs.rename('./test.txt', `./${변수}${날짜.getMilliseconds()}.txt`, (err) => { //에러나면 에러처리
//     console.log(err);
// }) 

// 2 (파일 읽기) test.txt의 내용을 읽어줌. 처음에 null이 나오는 것은 fs.readFile의 리턴값이 null이기 때문. 
fs.readFile('./test.txt', 'utf8', (err, data) => {
    console.log(err); 
    console.log(data);
})

// 3
// fs.readdir('./', (err, data) => {
//     console.log(err);
//     console.log(data);
// })

// 4
// fs.writeFile('./test2.txt', 'hello world 2', (err)=>{
//     console.log(err);
// });

// 5
// fs.appendFile('./test2.txt', '\nhello world 3', (err)=>{
//     console.log(err);
// });

// 6
// fs.copyFile('./test2.txt', './test3.txt', (err)=>{
//     console.log(err);
// });

// 7
// fs.mkdir('./yoyo', (err)=>{
//     console.log(err);
// });