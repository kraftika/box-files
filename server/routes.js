module.exports = function(app) {

  app.get('/', function (req, res) {
    var box = req.app.box;
    var state = req.query.state || 'security_token3DKnhMJatFipTAnM0nHlZSS';

    box.authorize(state, function(err, response) {
      res.redirect(response.redirect);
    });
  });

  app.get('/authorize/callback', function (req, res) {
    var box = req.app.box;
    console.log('I received callback ');
    box.generateToken({authorization_code: req.query.code}, function(err, tokens) {
      res.cookie('x-boxtoken', tokens).redirect('http://localhost:9000/#/files');
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
