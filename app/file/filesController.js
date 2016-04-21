'use strict';

angular.module('boxi.files')
  .controller('filesController', ['$scope', 'filesService', function($scope, filesService) {
    filesService.getFiles().then(function(entries) {
      $scope.files = entries;
    })
  }]);
