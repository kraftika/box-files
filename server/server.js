var express = require('express');
var app = express();

var cookieParser = require('cookie-parser');
var boxNodeSDK   = require('./config');

app.use(boxNodeSDK());
app.use(cookieParser())

require('./routes')(app);

app.listen(8088, function() {
  console.log('server is listening');
});
