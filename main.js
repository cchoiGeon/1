//기본 세팅
const express = require("express");
const server = express();
const bodyParser = require('body-parser');
// const session = require('express-session');
// const FileStore = require('session-file-store')(session);
const mysql = require('mysql');
const cookie = require('cookie');

//내가 만든 모듈들 가져오기
const thisscript = require("./overlapJs/overlapscript"); //기본 틀 script
const thiscss = require("./overlapJs/overlapcss"); // 기본 틀 css
const overlap = require("./overlapJs/overlap_div,script"); // 중복되는 코드들을 모아놓음 repeat으로 묶음 
const report = require("./reportJs/report_div,script"); // report 신고하기 기능을 담당하는 div와 script를 따로 만듬
const Lectureroom = require("./AtoEJs/AtoE_div,script"); // A동~E동까지 div와 script를 따로 만듬 
const board = require("./boardJs/board_div,script"); // 게시판 div와 script를 만듬
const login = require("./loginJs/login");
const register = require('./registerJs/register');
const Arouter = require('./Router/Arouter.js');
const home = require('./home/homediv');
const map = require('./map/mapdiv');
var cookies = {};

const db = mysql.createConnection({
  host : 'localhost',
  user : 'root',
  password : '111111',
  database : 'LectureRoom'
});


var loginbutton = `<li><a class="dropdown-item" href="/login">로그인</a></li>
<li><a class="dropdown-item" href="/register">회원가입</a></li>`;
var logoutbutton = '';  

function logintrue(req,res){
  cookies = cookie.parse(req.headers.cookie);
  if(cookies.logintrue){
    loginbutton = '';
    logoutbutton = `<li><hr class="dropdown-divider" /></li>
    <li><a class="dropdown-item" href="/logout_process">로그아웃</a></li>`;
  }else{
    loginbutton = `<li><a class="dropdown-item" href="/login">로그인</a></li>
    <li><a class="dropdown-item" href="/register">회원가입</a></li>`;
    logoutbutton = ''
    res.redirect('/login')
  }
}
function logintrueindex(req,res){
  cookies = cookie.parse(req.headers.cookie);
  if(cookies.logintrue){
    loginbutton = '';
    logoutbutton = `<li><hr class="dropdown-divider" /></li>
    <li><a class="dropdown-item" href="/logout_process">로그아웃</a></li>`;
  }else{
    loginbutton = `<li><a class="dropdown-item" href="/login">로그인</a></li>
    <li><a class="dropdown-item" href="/register">회원가입</a></li>`;
    logoutbutton = ''
  }
}

db.connect();
//use 매서드 사용

server.use(express.static("images"));
server.use(bodyParser.urlencoded({ extended: false}));
// server.use(session({
//   secret: 'sadd',
//   resave: false,
//   saveUninitialized: true,
//   store: new FileStore()
// }));

//라우팅
server.use('/A',Arouter);

//홈페이지
server.get("/", (req, res) => {
  logintrueindex(req,res)
  res.send(overlap.repeat(thiscss,loginbutton,logoutbutton,home,``,thisscript));
});
// Lectureroom/강의실 선택시 
server.get("/B", (req, res) => {
  logintrue(req,res)
  res.send(overlap.repeat(thiscss,loginbutton,logoutbutton,Lectureroom.Bdiv,Lectureroom.script,thisscript));
});
server.get("/C", (req, res) => { 
  res.send(overlap.repeat(thiscss,loginbutton,logoutbutton,Lectureroom.Cdiv,Lectureroom.script,thisscript));
});

server.get("/D", (req, res) => { 
  res.send(overlap.repeat(thiscss,loginbutton,logoutbutton,Lectureroom.Ddiv,Lectureroom.script,thisscript));
});

server.get("/E", (req, res) => { 
  res.send(overlap.repeat(thiscss,loginbutton,logoutbutton,Lectureroom.Ediv,Lectureroom.script,thisscript));
});

server.get("/sangyoung", (req, res) => { 
  res.send(overlap.repeat(thiscss,loginbutton,logoutbutton,Lectureroom.Sangyoungdiv,Lectureroom.Sangyoungscript,thisscript));
});

//ADDONS 부분 게시판,신고하기,지도 
server.get("/report", (req, res) => {
  res.send(overlap.repeat(thiscss,loginbutton,logoutbutton,report.div,report.script,thisscript));
});
server.post("/report_process",(req,res) => {
  let post = req.body;
  let reportcontent = post.reportcontent;
  let selectroom = post.selectroom;
  cookies = cookie.parse(req.headers.cookie);
  db.query('INSERT INTO report(floornum,content,time,userid) VALUES(?,?,NOW(),?)',
          [selectroom,reportcontent,cookies.id],
          function(err,report){
            res.redirect('/report');
  });
});

server.get("/board", (req, res) => {
  res.send(overlap.repeat(thiscss,loginbutton,logoutbutton,board.div,``,thisscript));
});
server.get("/map", (req, res) => {
  res.send(overlap.repeat(thiscss,loginbutton,logoutbutton,map,``,thisscript));
});

//로그인 , 회원가입, 로그아웃 부분
server.get("/login", (req, res) => {
  res.send(login(thiscss,thisscript));
});
server.post("/login_process", (req, res) => {
  var post = req.body; 
  db.query('SELECT * FROM register',function(err2,result){
    for(var i = 0; i < result.length; i++){
      if(result[i].id === post.id && result[i].password ===post.password){
        res.writeHead(302, {
          'Set-Cookie':[
            `id=${result[i].id}`,
            `password=${result[i].password}`,
            `name=${result[i].name}`,
            `logintrue=true`
          ],
          Location: '/'
        });
        return res.end();
      }
    }
    res.redirect('/login');
  });
});

server.get("/logout_process",(req,res) => {
  res.writeHead(302, {
    'Set-Cookie':[
      'id=; Max-Age=0',
      'password=; Max-Age=0',
      'name=; Max-Age=0',
      'logintrue=; Max-Age=0'
    ],
    Location: '/'
  });
  res.end();
})
server.get("/register", (req, res) => { 
  res.send(register(thiscss,thisscript));
});
server.post("/register_process", (req, res) => {
  var post = req.body;
  if(post.password === post.checkpassword){
      db.query('INSERT INTO register(id,password,usetrue,name) VALUES(?,?,?,?)',[post.id,post.password,'사용가능',post.name],function(err,result){
        res.redirect('/login');
    });
  }else{
    res.redirect('/register');
  }
});

server.listen(3000);