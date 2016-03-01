var http = require('http'),
    https = require('https'),
    express = require('express'),
    bodyParser = require('body-parser');
var app = express();

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
})

app.post('/login', function(req, res) {
  res.send('POST Request to the homepage')
})

http.createServer(app).listen(2000, function() {
  console.log('Application started...');
});
