angular.module('giftappControllers',['giftlistServices'])
    .controller('DashMainController', ['$scope','List', function($scope,List) {
        $scope.lists = List.query();

    }]);
