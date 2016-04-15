'use strict'

angular.module('boxi', ['ui.router','boxi.auth'])
    .config(['$stateProvider', '$urlRouterProvider', '$httpProvider',
        function($stateProvider, $urlRouterProvider, $httpProvider) {
            $urlRouterProvider.otherwise('/');

            $stateProvider
                .state('home', {
                    url:'/',
                    templateUrl: 'auth/login.html',
                    controller: 'authController'
                })
                .state('authorize', {
                    url:'/authorize',
                    templateUrl: 'authorized.html',
                    controller: 'authorizedController'
                })
                .state('login', {
                    url:'/login',
                    templateUrl: 'auth/login.html',
                    controller: 'loginController'
                })
                .state('files', {
                    url:'/files',
                    templateUrl: 'files.html',
                    controller: 'filesController'
                })
                .state('upload', {
                    url:'/upload',
                    templateUrl: 'upload.html'
                });

            $httpProvider.defaults.useXDomain = true;
            delete $httpProvider.defaults.headers.common['X-Requested-With'];
}]);


