var box = require('../lib/box');

module.exports = function() {
  return function nodeBoxSDK(req, res, next) {
    box.configure({
      client_id: 'your_client_id',
      client_secret: 'your_client_secret',
      api_key: 'your_api_key',
      encrypt: { password: 'node-box' }
    });
    req.app.box = box;

    next();
  };
};
