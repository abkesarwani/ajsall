var app = angular.module('myApp', []);
app.directive('one', function() {
    return {
        template: '<span class="badge badge-info">{{greetings}} {{to}}!!</span>',
        restrict: 'EACM',
        replace: true,
    }
});

app.controller('Controller', ["$scope", function($scope) {
    $scope.greetings = "Hello";
    $scope.to = "World";
}]);