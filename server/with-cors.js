var express = require('express')
  , cors = require('cors')
  , app = express()
  , port = 8087;

var whitelist = ['http://localhost:9000', 'https://box.app.com'];
var corsOptions = {
  origin: function(origin, callback){
    var originIsWhitelisted = whitelist.indexOf(origin) !== -1;
    callback(null, originIsWhitelisted);
  },
  credentials: true,
  preflightContinue: true
};

app.use(cors(corsOptions));

app.get('/', function(req, res, next){
  // res.json({msg: 'This is CORS-enabled for only example.com.'});
  // var url = 'https://app.box.com/api/oauth2/authorize?response_type=code&client_id=gegee4jf81bjanlsevvivomgb2m96fcu&state=security_token3DKnhMJatFipTAnM0nHlZSS';
  var url = 'https://github.com/login/oauth/authorize?client_id=7f246709b31918be75b7';
  // var url = 'http://api.openweathermap.org/data/2.5/weather?q=London';
  // var url = 'https://api.github.com/users/hackeryou';
  res.redirect(url);
});

app.listen(port, function(){
  console.log('CORS-enabled web server listening on port ' + port);
});
