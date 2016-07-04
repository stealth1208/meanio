(function() {
    'use strict';

    /* jshint -W098 */

    function DemoController($scope, Global, Demo, $stateParams) {
        $scope.global = Global;
        $scope.package = {
            name: 'demo'
        };

        $scope.checkCircle = function() {
            Demo.checkCircle($stateParams.circle).then(function(response) {
                $scope.res = response;
                $scope.resStatus = 'info';
            }, function(error) {
                $scope.res = error;
                $scope.resStatus = 'danger';
            });
        };
    }

    angular
        .module('mean.demo')
        .controller('DemoController', DemoController);

    DemoController.$inject = ['$scope', 'Global', 'Demo', '$stateParams'];

})();
