var path = require('path');
var fs = require('fs');
var express = require('express');
var app = express();
var ws = require('express-ws')(app);


app.use(express.static('public'));

app.get('/',  function (req, res) {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});


app.ws('/', (s, req) => {
  console.log("start ws");

  //file watcher here
  var folder ="public";
  var watcher = require("./filewatch.inc.js");
  watcher.appinit(folder);
  watcher.watch(s);

  //s.send( "send some data to WS");


  s.on('message', function(msg, flags) {
    //console.log("Received message"+ msg);
    var msgobj = JSON.parse(msg);

    //console.log("WRITE FILE PUBLIC/" + msgobj.text);

    fs.writeFile(folder + "/" + msgobj.text, "content", function(err) {
        if(err) return console.log(err);
    });

  });

});

var server = app.listen(5000, function () {

});
