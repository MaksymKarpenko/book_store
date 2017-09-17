"use strict"
var express = require("express");
var app = express();
var path = require('path');

//MIDDLEWARE TO DEFINE STATIC FOR STATIC FILES
app.use(express.static('dist'))

app.get('/', function(req, res) {
	res.sendFile(path.resolve(__dirname, 'src', 'index.html'))
})

app.listen(3000, function() {
	console.log('app is listening on port 3000');
})