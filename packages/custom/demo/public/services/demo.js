(function() {
    'use strict';

    function Demo($http, $q) {
        return {
            name: 'demo',
            checkCircle: function(circle) {
                var deferred = $q.defer();

                $http.get('/api/demo/example/' + circle).success(function(response) {
                    deferred.resolve(response);
                }).error(function(response) {
                    deferred.reject(response);
                });
                return deferred.promise;

            }
        };
    }

    angular
        .module('mean.demo')
        .factory('Demo', Demo);

    Demo.$inject = ['$http', '$q'];

})();
