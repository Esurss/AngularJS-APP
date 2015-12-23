'use strict';

var tyControllers = angular.module('tyControllers', []);

tyControllers.controller('HomePageCtrl', ['$scope', 'GetData',
    function ($scope, GetData) {
        $scope.tpls = GetData.query();
        console.log($scope.tpls)
    }
]);

