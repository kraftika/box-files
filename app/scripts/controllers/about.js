'use strict';

/**
 * @ngdoc function
 * @name boxFilesApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the boxFilesApp
 */
angular.module('boxFilesApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
