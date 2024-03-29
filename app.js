
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/users', user.list);
app.get('/seville',function(req,res){
	res.send("seville")
})
app.get('/canaryisland',function(req,res){
	res.send("canaryisland")
})
app.get('/capeverde',function(req,res){
	res.send("capeverde")
})
app.get('/straitOfMagellan',function(req,res){
	res.send("straitOfMagellan")
})
app.get('/guam',function(req,res){
	res.send("guam")
})
app.get('/philippines',function(req,res){
	res.send("philippines")
})



http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
