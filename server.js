var express = require('express');
var session = require('express-session');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, './client')))

var database = require('./config/mongoose.js');
var routes = require('./config/routes.js')(app);

app.listen(8000, function(){
	console.log("listening on 8000")
})