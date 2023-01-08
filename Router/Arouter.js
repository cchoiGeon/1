const express = require("express");
const router = express.Router();
const mysql = require('mysql');
const bodyParser = require('body-parser');
const thisscript = require("../overlapJs/overlapscript"); //기본 틀 script
const thiscss = require("../overlapJs/overlapcss"); // 기본 틀 css
const overlap = require("../overlapJs/overlap_div,script"); // 중복되는 코드들을 모아놓음 repeat으로 묶음 
const Lectureroom = require("../AtoEJs/AtoE_div,script"); // A동~E동까지 div와 script를 따로 만듬 
const cookie = require('cookie');
var counting = 0;

var cookies = {}

const db = mysql.createConnection({
  host : 'localhost',
  user : 'root',
  password : '111111',
  database : 'LectureRoom'
});
db.connect();

var loginbutton = `<li><a class="dropdown-item" href="/login">로그인</a></li>
<li><a class="dropdown-item" href="/register">회원가입</a></li>`;
var logoutbutton = '';  

function logintrue(req,res){
  if(req.headers.cookie===undefined){
      loginbutton = `<li><a class="dropdown-item" href="/login">로그인</a></li>
      <li><a class="dropdown-item" href="/register">회원가입</a></li>`;
      logoutbutton = ''
      res.writeHead(302, {'Location': '/login'});
      res.end();
  }
  if(cookie.parse(req.headers.cookie).logintrue===undefined){
    loginbutton = `<li><a class="dropdown-item" href="/login">로그인</a></li>
    <li><a class="dropdown-item" href="/register">회원가입</a></li>`;
    logoutbutton = ''
    res.writeHead(302, {'Location': '/login'});
    res.end();
  }
  if(req.headers.cookie){
    if(cookie.parse(req.headers.cookie).logintrue){
      loginbutton = '';
      logoutbutton = `<li><hr class="dropdown-divider" /></li>
      <li><a class="dropdown-item" href="/logout_process">로그아웃</a></li>`;
    }
  }
}

router.use(express.static("images"));
router.use(bodyParser.urlencoded({ extended: false}));

router.get("/", (req, res) => {
  logintrue(req,res);
  db.query('SELECT * FROM Afloor2',function(err,Afloor2){
    res.send(overlap.repeat(thiscss,loginbutton,logoutbutton,Lectureroom.Adiv(3,Afloor2[0].status,Afloor2[1].status,Afloor2[2].status),Lectureroom.script,thisscript));
  })
});
router.post("/choiceroom",(req,res) =>{
  var post = req.body;
  if(post.choicefloor2){
    res.redirect('/A/floor2');
  }else if(post.choicefloor3){
    res.redirect('/A/floor3');
  }else if(post.choicefloor4){
    res.redirect('/A/floor4');
  }else{
    res.redirect('404');
  }
});
router.get('/floor2',(req,res)=>{
  db.query('SELECT * FROM Afloor2',function(err,Afloor2){
    res.send(overlap.repeat(thiscss,loginbutton,logoutbutton,Lectureroom.Afloor2(3,Afloor2[0].status,Afloor2[1].status,Afloor2[2].status),Lectureroom.script,thisscript));
  })
})
router.get('/floor3',(req,res)=>{
  res.send(overlap.repeat(thiscss,loginbutton,logoutbutton,Lectureroom.Afloor3(),Lectureroom.script,thisscript));
})
router.get('/floor4',(req,res)=>{
  res.send(overlap.repeat(thiscss,loginbutton,logoutbutton,Lectureroom.Afloor4(),Lectureroom.script,thisscript));
})
router.post("/process",(req,res) => {
  var post = req.body;
  var select201 = post.class201;
  var select202 = post.class202;
  var select203 = post.class203;
  cookies = cookie.parse(req.headers.cookie);
  db.query('SELECT * FROM register',function(err,register){
    db.query('SELECT * FROM Afloor2',function(err2,Afloor2){
      if(select201 === '입실'){
        if(Afloor2[0].status === '사용가능'){
          db.query('UPDATE Afloor2 SET status=?, time=NOW(), userId=? WHERE number=?',
          ['사용 중',cookies.id,201],
          function(err3,result){
            console.log("입실이 완료되셨습니다");
            db.query('UPDATE register SET usingtrue=? WHERE id=?',
            ['사용 중',cookies.id],function(err4,register2){
              res.redirect('/A');
            });
          })
        }else{
          console.log("사용 중인 강의실입니다");
          res.redirect('/A');
        }
      }
      else if(select201 ==='퇴실'){
        if(Afloor2[0].status === '사용 중'){
          db.query('UPDATE Afloor2 SET status=?, time=NOW(), userId=? WHERE number=?',
          ['사용가능',cookies.id,201],
          function(err3,result){
            console.log("퇴실이 완료되셨습니다");
            db.query('UPDATE register SET usingtrue=? WHERE id=?',
            ['사용가능',cookies.id],function(err4,register2){
              res.redirect('/A');
            });
          })
        }else{
          console.log('빈 강의실이거나 퇴실 완료한 강의실입니다.')
          res.redirect('/A');
        }
      }
      else if(select201 === '예약'){
        if(Afloor2[0].status === '사용가능'){
          db.query('UPDATE Afloor2 SET status=?, time=NOW(), userId=? WHERE number=?',
          ['사용 중',cookies.id,201],
          function(err3,result){
            console.log("예약이 완료되셨습니다");
            db.query('UPDATE register SET usingtrue=? WHERE id=?',
            ['사용 중',cookies.id],function(err4,register2){
              res.redirect('/A');
            });
          })
        }
      }
    if(select202 === '입실'){
      if(Afloor2[1].status === '사용가능'){
        db.query('UPDATE Afloor2 SET status=?, time=NOW(), userId=? WHERE number=?',
        ['사용 중',cookies.id,202],
        function(err3,result){
          console.log("입실이 완료되셨습니다");
          db.query('UPDATE register SET usingtrue=? WHERE id=?',
          ['사용 중',cookies.id],function(err4,register2){
            res.redirect('/A');
          });
        })
      }else{
        console.log("사용 중인 강의실입니다");
        res.redirect('/A');
      }
    }
    else if(select202 ==='퇴실'){
      if(Afloor2[1].status === '사용 중'){
        db.query('UPDATE Afloor2 SET status=?, time=NOW(), userId=? WHERE number=?',
        ['사용가능',cookies.id,202],
        function(err3,result){
          console.log("퇴실이 완료되셨습니다");
          db.query('UPDATE register SET usingtrue=? WHERE id=?',
          ['사용가능',cookies.id],function(err4,register2){
            res.redirect('/A');
          });
        })
      }else{
        console.log('빈 강의실이거나 퇴실 완료한 강의실입니다.')
        res.redirect('/A');
      }
    }
    else if(select202 === '예약'){
      if(Afloor2[1].status === '사용가능'){
        db.query('UPDATE Afloor2 SET status=?, time=NOW(), userId=? WHERE number=?',
        ['사용 중',cookies.id,202],
        function(err3,result){
          console.log("예약이 완료되셨습니다");
          db.query('UPDATE register SET usingtrue=? WHERE id=?',
          ['사용 중',cookies.id],function(err4,register2){
            res.redirect('/A');
          });
        })
      }
    }
    if(select203 === '입실'){
      if(Afloor2[2].status === '사용가능'){
        db.query('UPDATE Afloor2 SET status=?, time=NOW(), userId=? WHERE number=?',
        ['사용 중',cookies.id,203],
        function(err3,result){
          console.log("입실이 완료되셨습니다");
          db.query('UPDATE register SET usingtrue=? WHERE id=?',
          ['사용 중',cookies.id],function(err4,register2){
            res.redirect('/A');
          });
        })
      }else{
        console.log("사용 중인 강의실입니다");
        res.redirect('/A');
      }
    }
    else if(select203 ==='퇴실'){
      if(Afloor2[2].status === '사용 중'){
        db.query('UPDATE Afloor2 SET status=?, time=NOW(), userId=? WHERE number=?',
        ['사용가능',cookies.id,203],
        function(err3,result){
          console.log("퇴실이 완료되셨습니다");
          db.query('UPDATE register SET usingtrue=? WHERE id=?',
          ['사용가능',cookies.id],function(err4,register2){
            res.redirect('/A');
          });
        })
      }else{
        console.log('빈 강의실이거나 퇴실 완료한 강의실입니다.')
        res.redirect('/A');
      }
    }
    else if(select203 === '예약'){
      if(Afloor2[2].status === '사용가능'){
        db.query('UPDATE Afloor2 SET status=?, time=NOW(), userId=? WHERE number=?',
        ['사용 중',cookies.id,203],
        function(err3,result){
          console.log("예약이 완료되셨습니다");
          db.query('UPDATE register SET usingtrue=? WHERE id=?',
          ['사용 중',cookies.id],function(err4,register2){
            res.redirect('/A');
          });
        })
      }
    }
  });
});
});
module.exports = router;