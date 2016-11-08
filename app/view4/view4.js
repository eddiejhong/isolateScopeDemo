/* globals console */

'use strict';

angular.module('myApp.view4', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view4', {
    templateUrl: 'view4/view4.html',
    controller: 'View4Ctrl'
  });
}])

.controller('View4Ctrl', ['$scope', function($scope) {
    $scope.foo = function() {
        console.log("I'm from the parent!");
    }
}])
.directive('childDirective4', function() {
    return {
        restrict: 'E',
        scope: {
            bar: '=' // Accept state/behavior from parent scope, set it to `bar`
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
