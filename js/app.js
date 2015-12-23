'use strict';

var tiaoYaApp = angular.module('tiaoYaApp', [
    'ngRoute',
    'tyServices',
    'tyControllers',
    'tyDirectives'
]);

tiaoYaApp.config(['$routeProvider', '$locationProvider',
    function ($routeProvider, $locationProvider) {
        $routeProvider.
            when('/index', {
                templateUrl: 'home.html',
                controller: 'HomePageCtrl'
            }).
            otherwise({
                redirectTo: '/index'
            });
        $locationProvider.html5Mode(true);
    }
]);