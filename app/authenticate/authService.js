'use strict';

angular.module('authModule')
  .factory('authService', function() {

    function _authenticate() {
      console.log('I will try to authenticate');
    }

    return {
      authenticate: _authenticate;
    }
  });
