'use strict';

angular.module('boxi.auth')
  .controller('filesController', ['$scope', 'filesService', function($scope, filesService) {
    $scope.files = [];

    $scope.files = filesService.getFiles()
      .then(function(dataFiles) {
        $scope.files = dataFiles;
      });

    /*
      Arrange code in modules
      Apply style code on login and files page
      Make the application responsive
    */
    var k = 0;
  }]);
