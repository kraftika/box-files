var express = require('express');
var app = express();

var cookieParser = require('cookie-parser');
var boxNodeSDK   = require('./config');

app.use(boxNodeSDK());
app.use(cookieParser())

require('./routes')(app);

var port = 8088;
app.listen(port, function() {
  console.log('The web server is listening on ' + port);
});
