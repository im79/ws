var path = require('path');
//var app = require('express')();


var express = require('express');
var app = express();
var ws = require('express-ws')(app);





app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.ws('/', (s, req) => {
  console.log("start watching");


  //var list = listdir.appinit("test");
  var listdir = require('./listdir.inc.js');
  console.log("list" + listdir.appinit("./public"));
  /*
  for (var t = 0; t < 13; t++){
    setTimeout(() => s.send('message from server:' +t, ()=>{}), 1000*t);
  }
  */

});

var server = app.listen(5000, function () {

});
