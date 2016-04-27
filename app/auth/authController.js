'use strict';

angular.module('boxi.auth')
  .controller('authController', ['$scope', '$window', function($scope, $window) {
    // To be removed  - extract the credentials from server side
    var boxAuthUrl = "https://www.box.com/api/oauth2/authorize";
    var code = "code";
    var clientId = "gegee4jf81bjanlsevvivomgb2m96fcu";
    var state = "security_token3DKnhMJatFipTAnM0nHlZSS";

    var url = boxAuthUrl + '?response_type=' + code + '&client_id=' + clientId + '&state=' + state;

    $scope.login = function() {
      $window.location.href = url;
    };
  }]);
