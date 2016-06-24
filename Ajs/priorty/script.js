var app = angular.module('myApp', []);
app.directive('bold', function() {
  return {
    template: '<span ng-transclude style="font-weight:bolder;color:red"></span>',
    restrict: 'EACM',
    priority:111, //Change this to < 1000
    transclude:true
  };
});

app.controller('Controller', ["$scope", function($scope) {
  $scope.data=["That's not what I was thinking", "Odd!!!"];
}]);