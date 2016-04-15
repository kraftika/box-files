'use strict';

angular.module('boxiApp.authentication')
  .factory('filesService', ['$http', function($http) {
    return {
      getFiles: getFiles,
      getFile: getFile
    }

    function getFiles() {
      $http.defaults.useXDomain = true;

      var request = $http({
          method: 'GET',
          url: 'http://localhost:8088/folder/0',
          withCredentials: true,
          headers: {
            'Content-Type': 'application/json; application/x-www-form-urlencoded; charset=utf-8',
            'X-Custom-Header': 'Angular.js',
          }
        });

      return(request.then(getEntries, handleError));
    }

    function getFile() {
    }

    function getEntries(response) {
      return(response.data.item_collection.entries);
    }

    function handleError(response) {
      return('An error has occurred...');
    }
  }]);
