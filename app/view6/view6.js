/* globals console */

'use strict';

angular.module('myApp.view6', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view6', {
    templateUrl: 'view6/view6.html',
    controller: 'View6Ctrl'
  });
}])

.controller('View6Ctrl', ['$scope', function($scope) {
    $scope.foo = function() {
        console.log("I'm from the parent!");
    }
}])
.directive('childDirective6', function() {
    return {
        restrict: 'E',
        scope: {
            bar: '<' // Accept state/behavior from parent scope, set it to `bar`
        },
        template: "<span ng-click='bar()'>Click me!</span>",
        controller: ['$scope', function($scope) {
            // Attempt to change foo, observe that it has no effect on the parent $scope.foo
            $scope.bar = function() {
                console.log("I'm from the child!");
            }
        }]
    };
});
