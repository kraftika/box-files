var box = require('../lib/box');

module.exports = function() {
  return function nodeBoxSDK(req, res, next) {
    box.configure({
      client_id: 'gegee4jf81bjanlsevvivomgb2m96fcu',
      client_secret: '2ZSGTCK4JkhMQ6FzZa0tvSacqT6FjdGI',
      api_key: 'gegee4jf81bjanlsevvivomgb2m96fcu',
      encrypt: { password: 'node-box' }
    });
    req.app.box = box;

    next();
  };
};
