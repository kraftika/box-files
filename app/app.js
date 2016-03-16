'use strict'

var app = angular.module('boxiApp', [
    'ui.router',
    'boxiApp.authentication'
    ]);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/home');
  console.log('Run ....');

  $stateProvider
    .state('home', {
        url:'/',
        templateUrl: 'home.html'
    })
    .state('login', {
        url:'/login',
        templateUrl: 'login.html',
        controller: 'loginController'
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
