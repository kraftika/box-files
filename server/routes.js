module.exports = function(app) {

  // app.use(function(req, res, next) {
  //   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  //   res.header("Access-Control-Allow-Origin", "*");
  //   res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');

  //   console.log('use...');
  //   next();
  // });

  app.get('/authorize2', function (req, res) {
    var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

    var xhr = new XMLHttpRequest();
    var url = 'https://app.box.com/api/oauth2/authorize?response_type=code&client_id=gegee4jf81bjanlsevvivomgb2m96fcu&state=security_token3DKnhMJatFipTAnM0nHlZSS';
    var method = 'GET';

    if ("withCredentials" in xhr) {

      // Check if the XMLHttpRequest object has a "withCredentials" property.
      // "withCredentials" only exists on XMLHTTPRequest2 objects.
      xhr.open(method, url, true);

    } else if (typeof XDomainRequest != "undefined") {

      // Otherwise, check if XDomainRequest.
      // XDomainRequest only exists in IE, and is IE's way of making CORS requests.
      xhr = new XDomainRequest();
      xhr.open(method, url);

    } else {

      // Otherwise, CORS is not supported by the browser.
      xhr = null;
    }

    if (xhr != null)
    {
      xhr.followsRedirect=false;
      xhr.withCredentials=true;

      xhr.onreadystatechange  = function() {
        if(xhr.readyState==4)
        {
          if(xhr.status == 200)
          {
            res.write(xhr.responseText);
            res.end();
            // return xhr.responseText;
                // console.log(xhr.responseText);
          }
          else
          {
            console.log('error');
          }
        }
      }
      xhr.send();
    }
  });

  app.get('/authorize', function (req, res) {

    console.log('I am called');
    var box = req.app.box;
    var state = req.query.state || 'security_token3DKnhMJatFipTAnM0nHlZSS';

    box.authorize(state, function(err, response) {
      // res.redirect(response.redirect);
      res.writeHead(302, { Location: response.redirect } );
      res.end();
    });
  });

  app.get('/authorize/callback', function (req, res) {
    var box = req.app.box;
    console.log('I received callback ');
    box.generateToken({authorization_code: req.query.code}, function(err, tokens) {
      res.cookie('x-boxtoken', tokens).redirect('/folder/0');
    });
  });

  app.get('/folder/:id', function (req, res) {
    var box = req.app.box;
    var options = { tokens: req.cookies['x-boxtoken'] };
    box.content.folder.get(req.params.id, options, function(err, response, tokens) {
      res.cookie('x-boxtoken', tokens).json(response.body);
    });
  });

  app.get('/file/:id', function (req, res) {
    var box = req.app.box;
    var options = { tokens: req.cookies['x-boxtoken'] };
    box.content.file.get(req.params.id, options, function(err, response, tokens) {
      res.cookie('x-boxtoken', tokens).json(response.body);
    });
  });

  app.get('/files/:id/content', function (req, res) {
    var box = req.app.box;
    var options = { tokens: req.cookies['x-boxtoken'] };
    box.content.file.get(req.params.id, options, function(err, response, tokens) {
      res.cookie('x-boxtoken', tokens).json(response.body);
    });
  });
};
