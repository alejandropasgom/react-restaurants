var menus = require('./data/restaurantsMenus.json');
var users = require('./data/users.json');
var express = require('express');
var app = express();
var cors = require('cors');

app.use(cors());
app.use(express.json());

// respond with "hello world" when a GET request is made to the homepage
app.get('/menus', function(req, res) {
  setTimeout(function(){
    res.send(JSON.stringify(menus));
  }, 2000);
});

//POST http.//localhost:3001
app.post('/login', function(req, res) {
  var userInfo = users.filter(user => user.login == req.body.login && user.password == req.body.password);
  if(userInfo.length > 0){
      res.setHeader('Content-Type', 'application/json');
      res.status(200);
      res.end(JSON.stringify(userInfo[0]));

      return;
  }
     
  res.status(403);
  res.end(null);
});

var port = 3001;
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});