var express = require('express');
var app = express();
var port = 3000;

var middleware = require('./middleware.js');


// app.use(middleware.requireAuthentification);
app.use(middleware.logger);	


app.get('/about', middleware.requireAuthentification, function(req, res) {
	res.send('About Us!!');
});

app.use(express.static(__dirname + "/public"));

app.listen(port, function() {
	console.log('Express server started at port ' + port);
});