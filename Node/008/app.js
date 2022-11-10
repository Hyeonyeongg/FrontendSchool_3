const http = require('http');

const server = http.createServer(function(req, res){
    console.log('server가 구동중입니다.');
    console.log(req.headers);
    console.log(req.method);
    console.log(req.url);
    res.write('<h1 style="color:black">hello world</h1>');
    //다크모드 시에는 검은색 배경이 됩니다.
    // res.write('hello world');
    res.end();
});

server.listen(8080); //8080은 포트. 테스트 서버할 때 많이 사용함.
//콘솔창에 동일한 내용이 두번 출력되는 이유는? 파비콘 요청이 들어온것. 파비콘 요청은 기본적으로 들어오게 되어있음. 