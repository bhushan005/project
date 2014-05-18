/**
 * Created with JetBrains WebStorm.
 * User: Bhushan
 * Date: 5/17/14
 * Time: 5:03 PM
 * To change this template use File | Settings | File Templates.
 */

angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider

        // home page
        .when('/', {
            templateUrl: 'html/home.html',
            controller: 'MainController'
        })

        // nerds page that will use the NerdController
        .when('/nerds', {
            templateUrl: 'html/nerd.html',
            controller: 'NerdController'
        })

        //
        .when('/geeks', {
            templateUrl: 'html/geek.html',
            controller: 'GeekController'
        });

    $locationProvider.html5Mode(true);

}]);
