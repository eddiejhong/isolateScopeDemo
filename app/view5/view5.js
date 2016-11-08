/* globals console */

'use strict';

angular.module('myApp.view5', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view5', {
    templateUrl: 'view5/view5.html',
    controller: 'View5Ctrl'
  });
}])

.controller('View5Ctrl', ['$scope', function($scope) {
    $scope.foo = function() {
        console.log("I'm from the parent!");
    }
}])
.directive('childDirective5', function() {
    return {
        restrict: 'E',
        scope: {
            bar: '&' // Accept state/behavior from parent scope, set it to `bar`, do not allow child to modify parent
        },
        template: "<span ng-click='bar()'>Click me!</span>",
        controller: ['$scope', function($scope) {
            // Attempt to change foo
            $scope.bar = function() {
                console.log("I'm from the child!");
            }
        }]
    };
});
