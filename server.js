var express = require('express');
var app = express();
var port = 3000;

var middleware = {
	requireAuthentification: function(req, res, next) {
		console.log('private route hit!');
		next();
	},
	logger: function(req, res, next) {
		var date = new Date().toString();
		console.log(date + ' Request: ' + req.method + ' ' + req.originalUrl);
		next();
	}
};

// app.use(middleware.requireAuthentification);
app.use(middleware.logger);	


app.get('/about', middleware.requireAuthentification, function(req, res) {
	res.send('About Us!');
});

app.use(express.static(__dirname + "/public"));

app.listen(port, function() {
	console.log('Express server started at port ' + port);
});