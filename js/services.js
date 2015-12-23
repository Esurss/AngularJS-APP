'use strict'

var tyServices = angular.module('tyServices', ['ngResource']);

tyServices.factory('GetData', ['$resource',
    function ($resource) {
        return $resource('/json/:name.json', {}, {
            query: {
                method: 'GET',
                params: {
                    name: 'home'
                },
                isArray: true
            }
        });
    }
]);