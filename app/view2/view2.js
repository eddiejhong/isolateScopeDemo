/* globals console */

'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', ['$scope', function($scope) {
    $scope.foo = "I'm from the parent";
}])
.directive('childDirective2', function() {
    return {
        restrict: 'E',
        scope: {
            bar: '@' // Accept state from parent scope, set it to `bar`
        },
        template: "<div><p>Child state `bar`: {{bar}}</p></div>",
        controller: ['$scope', function($scope) {
            // Attempt to change parent state through bar, observe that it has no effect
            $scope.bar = "I'm from the child!";
        }]
    };
});
