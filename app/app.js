'use strict'

var app = angular.module('boxiApp', ['ui.router']);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/home');
  console.log('Run ....');

  $stateProvider
    .state('home', {
        url:'/home',
        templateUrl: 'home.html'
    })
    .state('login', {
        url:'/login',
        templateUrl: 'login.html'
    })
    .state('download', {
        url:'/download',
        templateUrl: 'download.html'
    })
    .state('upload', {
        url:'/upload',
        templateUrl: 'upload.html'
    })
}]);
