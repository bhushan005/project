/**
 * Created with JetBrains WebStorm.
 * User: Bhushan
 * Date: 5/17/14
 * Time: 5:05 PM
 * To change this template use File | Settings | File Templates.
 */

angular.module('GeekService', []).factory('Geek', ['$http', function($http) {

    return {
        // call to get all nerds
        get : function() {
            return $http.get('/api/geeks');
        },

        // call to POST and create a new geek
        create : function(geekData) {
            return $http.post('/api/geeks', geekData);
        },

        // call to DELETE a geek
        delete : function(id) {
            return $http.delete('/api/geeks/' + id);
        }
    }

}]);
