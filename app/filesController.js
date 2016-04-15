'use strict';

angular.module('boxiApp.authentication')
  .controller('filesController', ['$scope', 'filesService', function($scope, filesService) {
    $scope.files = [];

    $scope.files = filesService.getFiles()
      .then(function(dataFiles) {
        $scope.files = dataFiles;
      });

    var k = 0;
  }]);
