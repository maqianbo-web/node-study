const http = require("http");

const renderStatus = require("./renderStatus");
const {renderHtml} = require('./renderHtml')

// 创建服务器
const server = http.createServer();

server.on("request",(req,res) => {
  // req接收浏览器传递的参数
  // res返回的参数
  const {url} = req;
  if(url === '/favicon.ico'){
    return
  }
  // console.log('nodeUrl.parse(url)',nodeUrl.parse(url,true))
  // const pathname = nodeUrl.parse(url).pathname
  const urlObj = new URL (url, 'http://127.0.0.1:3000');
  console.log('urlObj',urlObj)

  const {pathname} = urlObj

  res.writeHead(renderStatus(pathname), {"Content-Type": "text/html;charset=utf-8"});
  res.write(renderHtml(pathname));
  res.end();
})

server.listen("3000",() => {
  console.log("server start");
})


