const express = require("express");
const app = express();
const port = 5050;

app.get("/", (req, res) => {
  res.send("nodejs登录页");
});

app.get("/home", (req, res) => {
  res.send("nodejs首页");
});

app.get("/user-info", (req, res) => {
  res.send("个人隐私信息");
});

app.get("/public-info", (req, res) => {
  res.send("公开信息");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
