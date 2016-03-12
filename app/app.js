'use strict'

var routeApplication = angular.module('boxFilesConfig', ['ui.router']);

routeApplication.config(function($stateProvider, $urlRouterProvider) {
  $urlRouteProvider.otherwise('/login');

  $stateProvider
    .state('login', {
      url: '/login',
      templateUrl: 'login.html'
    })
    .state('list', {
      url: '/list',
      templateUrl: 'files.html'
    })
    .state('download', {
      url: '/download',
      templateUrl: 'download.html'
    })
    .state('upload', {
      url: '/upload',
      templateUrl: 'upload.html'
    });
});
