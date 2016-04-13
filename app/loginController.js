'use strict';

angular.module('boxiApp.authentication')
  .controller('loginController', ['$scope', '$window', function($scope, $window) {
    var boxAuthUrl = "https://www.box.com/api/oauth2/authorize";

    $scope.code = "code";
    $scope.clientId = "gegee4jf81bjanlsevvivomgb2m96fcu";
    $scope.state = "security_token3DKnhMJatFipTAnM0nHlZSS";

    var url = boxAuthUrl + '?response_type=' + $scope.code + '&client_id=' + $scope.clientId + '&state=' + $scope.state;
    console.log(url);
    $scope.login = function() {
      $window.location.href = url; //You should have http here.
    };
  }]);
