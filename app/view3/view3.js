/* globals console */

'use strict';

angular.module('myApp.view3', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view3', {
    templateUrl: 'view3/view3.html',
    controller: 'View3Ctrl'
  });
}])

.controller('View3Ctrl', ['$scope', function($scope) {
    $scope.foo = 'hello world 3!';
}])
.directive('childDirective3', function() {
    return {
        restrict: 'E',
        scope: {
            bar: '=' // Accept state/behavior from parent scope, set it to `bar`
        },
        template: "<span ng-bind='bar'></span>",
        controller: ['$scope', function($scope) {
            // Attempt to change foo
            $scope.bar = "hello world 3! I'm from the child!"
        }]
    };
});
