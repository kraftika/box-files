'use strict'

var app = angular.module('boxiApp', ['ui.router']);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');
  console.log('Run ....');

  $stateProvider
    .state('login', {
        url:'/',
        templateUrl: 'home.html'
    })
    .state('download', {
        url:'/download',
        templateUrl: 'download.html'
    })
}]);

// boxi.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
//   $urlRouteProvider.otherwise('/');

//   $stateProvider
//     .state('login', {
//       url: '/login',
//       templateUrl: 'login.html'
//     })
//     .state('list', {
//       url: '/list',
//       templateUrl: 'files.html'
//     })
//     .state('download', {
//       url: '/download',
//       templateUrl: 'download.html'
//     })
//     .state('upload', {
//       url: '/upload',
//       templateUrl: 'upload.html'
//     });
// }]);
