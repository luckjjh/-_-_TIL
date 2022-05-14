const http = require("http");

http.createServer((req,res) => {
    //res.writeHead(200,{"Content-Type":"text/html"});
    //200 정상 동작
    //404 정상 동작 X
    //res.end("<p>Hello World</p>");


    if(req.url==="/"){
        res.writeHead(200);
        res.end("main url");
    }else if(req.url ==="/upload"){
        res.writeHead(200);
        res.end("upload url");
    }else if(req.url ==="/delete"){
        res.writeHead(200);
        res.end("deleter url");
    }else{
        res.writeHead(404);
        res.end("Not found!!");
    }
}).listen(8080,()=>{
    console.log("8080 Port Server ON");
});

// localhost(127.0.0.1): 현재 컴퓨터의 내부 주소
// 서버 개발시에 테스트 용으로 많이 쓰임

// 포트: 서버 내의 프로세스를 구분하는 번호
// 기능에 따라 포트번호로 프로세스들을 구분함