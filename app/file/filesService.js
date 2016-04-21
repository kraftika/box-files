'use strict';

angular.module('boxi.files')
  .factory('filesService', ['$http', function($http) {
    return {
      getFiles: getFiles,
      getFile: getFile
    }

    function getFiles(baseUrl) {
      var url = 'http://localhost:8088/folder/0';

      var request = $http({
          method: 'GET',
          url: url,
          withCredentials: true,
          headers: {
            'Content-Type': 'application/json; application/x-www-form-urlencoded; charset=utf-8',
            'X-Custom-Header': 'Angular.js',
          },
          cache: true
        });

      return(request.then(getEntries, handleError));
    }

    function getFile() {
    }

    function getEntries(response) {
      return(response.data.item_collection.entries);
    }

    function handleError(response) {
      return( $q.reject({ message: 'Unable to retrive files list' }));
    }
  }]);
