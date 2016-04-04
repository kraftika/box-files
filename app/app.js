'use strict'

var app = angular.module('boxiApp', [
    'ui.router',
    'boxiApp.authentication'
    ]);

app.config(['$stateProvider', '$urlRouterProvider', '$httpProvider', function($stateProvider, $urlRouterProvider, $httpProvider) {
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
    });

    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
}]);
