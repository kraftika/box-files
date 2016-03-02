'use strict';

/**
 * @ngdoc function
 * @name boxFilesApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the boxFilesApp
 */
angular.module('boxFilesApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
