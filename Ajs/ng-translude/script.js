var app = angular.module('myApp', []);
app.directive('redandbold', function() {
    return {
        template: '<div ng-transclude style="font-weight:bolder;color:red"></div>',
        restrict: 'EACM',
        replace: true,
        transclude:true
    }
});

app.controller('Controller', ["$scope", function($scope) {
    $scope.greetings = "Hello";
    $scope.to = "World";
}]);