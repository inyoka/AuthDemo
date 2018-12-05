var express                 = require('express'),
    mongoose                = require('mongoose'),
    passport                = require('passport'),
    bodyParser              = require('body-parser'),
    User                    = require('./models/user'),
    LocalStrategy           = require('passport-local'),
    passportLocalMongoose   = require('passport-local-mongoose');

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
