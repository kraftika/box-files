var express = require('express');
var app = express();

var cookieParser = require('cookie-parser');
var boxNodeSDK   = require('./config');

app.use(boxNodeSDK());
app.use(cookieParser());

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Headers', 'Authorization, Origin, X-Requested-With, Content-Type, Accept, X-Custom-Header');
  res.header('Access-Control-Allow-Origin', req.headers.origin);
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Credentials', true);
  res.header('X-Custom-Header', 'Angular.js');

  if (req.method === 'OPTIONS') {
    res.statusCode = 204;
    res.end();
  } else {
    next();
  }
  // next();
});

require('./routes')(app);

var port = 8088;
app.listen(port, function() {
  console.log('The web server is listening on ' + port);
});
