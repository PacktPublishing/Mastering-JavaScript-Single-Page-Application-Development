angular.module('giftlistServices', ['ngResource'])
    .factory('List', function($resource){
        return $resource('/giftlist/:id',{id: '@_id'})
    });
