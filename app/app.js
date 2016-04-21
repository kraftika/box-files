'use strict'

angular.module('boxi', ['ui.router','boxi.auth', 'boxi.files'])
    .config(['$stateProvider', '$urlRouterProvider', '$httpProvider',
        function($stateProvider, $urlRouterProvider, $httpProvider) {
            $urlRouterProvider.otherwise('/');

            $stateProvider
                .state('home', {
                    url:'/',
                    templateUrl: 'auth/login.html',
                    controller: 'authController'
                })
                .state('files', {
                    url:'/files',
                    templateUrl: 'file/list.html',
                    controller: 'filesController'
                })

            $httpProvider.defaults.useXDomain = true;
            delete $httpProvider.defaults.headers.common['X-Requested-With'];
}]);


