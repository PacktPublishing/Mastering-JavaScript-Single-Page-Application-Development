angular.module('giftappControllers')
    .controller('GiftappFormController', ['$scope','List','csrfToken', '$state', function($scope, List, csrfToken, $state) {
        $scope.formData = {};
        $scope.formData.items = [];
        $scope.formData._csrf = csrfToken;


        $scope.create = function() {
            console.log("create");
            var myList = new List($scope.formData);
            myList.$save(function(giftList){
                console.log(giftList);
                $state.go('dash');
            });

        }
    }]);
