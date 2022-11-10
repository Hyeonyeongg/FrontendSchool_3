const http = require('http');
const fs = require('fs'); //파일시스템에서 파일을 읽어와서 보여주는 것.

const server = http.createServer(function(req, res){
    let url = req.url;
    if(req.url == '/favicon.ico'){
        return res.writeHead(404);
    }
    
    if(req.url == '/'){
        url = '/html/index.html';
    } else if (req.url == '/about'){ // http://localhost:8080뒤에 /about을 붙여주면 about.html로 감.
        url = '/html/about.html';
    } else if (req.url == '/product'){
        url = '/html/product.html';
    } else if (req.url == '/notice'){
        url = '/html/notice.html';
    } else if (req.url == '/test.css'){
        // 주의! 들어오는 url은 localhost:8080/test.css
        url = '/html/test.css'; 
    }else {
        res.writeHead(404);
        res.end();
        return 
    }

    
    res.writeHead(200);
    // console.log(__dirname + url);
    res.end(fs.readFileSync(__dirname + url)); //파일 시스템에서 그 파일을 읽어와서 보여주는 것
    // response.end('helloworld!!' + url);

});

server.listen(8080);