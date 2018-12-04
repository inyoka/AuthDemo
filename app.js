var express = require('express'),
mongoose = require('mongoode');
mongoose.connect("mongodb://localhost/auth_demo_app");


var app = express();
app.set('view engine', 'ejs');

app.get("/", function(req, res){
  res.render("home");
});

app.get("/secret", function(req, res){
  res.render("secret");
});

var listener = app.listen(3000, 'localhost', function(){
  var address = listener.address().address;
  var port = listener.address().port;
  console.log("server started on ... " + address + ":" + port);
});
