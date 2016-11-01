angular.module('giftapp', ['ui.router', 'giftappControllers' ])

    .config(
        ['$stateProvider', '$urlRouterProvider',
            function ($stateProvider, $urlRouterProvider) {

                $urlRouterProvider
                    .otherwise('/dash');

                $stateProvider

                    .state('dash', {
                        url:'/dash',
                        templateUrl: '/templates/dash-main.tpl.html',
                        controller: 'DashMainController'
                    })
                    .state('add', {
                        url:'/add',
                        templateUrl: '/templates/dash-add.tpl.html',

                    });

            }]);

