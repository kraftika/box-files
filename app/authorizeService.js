'use strict';

angular.module('boxiApp.authentication')
  .factory('authorizeService', ['$http', function($http) {
    var authService = {
      login: function() {
        $http.defaults.useXDomain = true;
        // $http.defaults.headers.common["X-Custom-Header"] = "Angular.js"
        delete $http.defaults.headers.common['X-Requested-With'];

        var config = {
          method: 'GET',
          url: 'http://localhost:8087',
          // url: 'https://app.box.com/api/oauth2/authorize?response_type=code&client_id=gegee4jf81bjanlsevvivomgb2m96fcu&state=security_token3DKnhMJatFipTAnM0nHlZSS',
          // url: 'https://api.github.com/users/hackeryou',
          withCredentials: true,
          headers: {
            'Content-Type': 'application/json; application/x-www-form-urlencoded; charset=utf-8',
            'X-Custom-Header': 'Angular.js',
          }
        };

        var loginPromise = $http(config)
          .then(function(response) {
            console.log('Response in service: ' + response);

            return response.data;
          });

        return loginPromise;
      }
    };

    return authService;
  }]);
