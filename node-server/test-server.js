let express = require("express");
let server = express();

let bodyParse = require("body-parser");

// 解释器
let urlencoded = bodyParse.urlencoded({ extends: true });
// application/json || application/x-www-form-urlencoded
let jsonParser = bodyParse.json();
// 将请求体参数存放到request.body
server.use("./store", jsonParser);

// 请求拦截回调
server.use("/", function (request, response, next) {
  console.log("执行中间件");
  console.log(request.query.page);
  next();
});

server.get("/home", function (request, response) {
  // console.log(request)
  console.log(request.query.page);
  response.send("get参数请求成功");
});

server().post("/store", function (request, response) {
  response.send("post请求成功");
});

server.listen(4040);
console.log("Open Server 4040");
