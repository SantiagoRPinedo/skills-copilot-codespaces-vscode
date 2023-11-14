//Create web server
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var http = require('http');
var fs = require('fs');
var port = 3000;
var comments = require('./comments.json');

//Set up body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Set up public folder
app.use(express.static(path.join(__dirname, 'public')));

//Set up views folder
app.set('views', './views');
app.set('view engine', 'pug');

//Set up routes
app.get('/', function(req, res){
	res.render('index');
});

app.get('/comments', function(req, res){
	res.render('comments', {comments: comments});
});

app.post('/comments', function(req, res){
	comments.push(req.body);
	fs.writeFile('comments.json', JSON.stringify(comments, null, 4), function(err){
		if(err){
			console.log(err);
		}
	});
	res.redirect('/comments');
});

//Start server
app.listen(port, function(){
	console.log('Server running on port ' + port);
});