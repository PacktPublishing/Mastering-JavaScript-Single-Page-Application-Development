angular.module('giftappControllers',['giftlistServices','csrfValue'])
    .controller('DashMainController', ['$scope','List', function($scope,List) {
        $scope.lists = List.query();

    }]);
