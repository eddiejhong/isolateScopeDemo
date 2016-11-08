/* globals console */

'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope', function($scope) {
    $scope.foo = function(name) {
        console.log('Hello '+name+'!');
    };
}])

// Inheriting behavior from parent ($scope):
//  Function invocation in child directive template of a function which does not
//  exist in the child $scope but is inherited from the parent controller $scope
.directive('childDirective', function() {
    return {
        template: "<div ng-click=\"foo('world')\">Click me to execute function in parent scope!</div>"
    };
});
