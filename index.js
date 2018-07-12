//引入http模块
var libHttp = require('http');  //HTTP协议模块 
var libUrl = require('url');    //URL解析模块 
var reboot = require("./src/reboot");
//设置主机名
var hostName = '127.0.0.1';
//设置端口
var port = 4444;
//创建服务
var server = libHttp.createServer(function (req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.setHeader('Access-Control-Allow-Origin', "*")
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    //获取请求的url 
    var reqUrl = req.url;
    //向控制台输出请求的路径 
    console.log(reqUrl);
    //使用url解析模块获取url中的路径名 
    var pathName = libUrl.parse(reqUrl).pathname;

    if (pathName == "/reboot.ss") {
        reboot.runReboot();
    }
    else {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.end("<h1>404 Not Found</h1>");
    }

});
server.listen(port, hostName, function () {
    console.log(`服务器运行在http://${hostName}:${port}`);
});