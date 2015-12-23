'use strict';

angular.module('tyDirectives',['ty.tpls.shophead']);

angular.module('ty.tpls.shophead',[]).
    controller('ShopHeadCtrl',['$scope','GetData',
        function ($scope,GetData) {
            //$scope.tpls = GetData.query();
        }
    ]).
    directive('tyShopHead', function () {
        return {
            restrict: 'EAMC',
            controller:'ShopHeadCtrl',
            replace: true,
            templateUrl: '/tpls/shopHead.html'
        }
    })