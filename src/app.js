"use strict";

//모듈
const express = require("express");
const app = express();
const PORT = 3000;
//라우팅
const home = require("./routes/home");

// 앱 세팅, view를 어떻게 해석할건지
app.set("views","./views");
app.set("view engine", "ejs");

app.use("/", home); //use -> 미들 웨어를 등록해주는 메서드

module.exports = app;
