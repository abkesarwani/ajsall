var app = angular.module('myApp', []);
app.directive('click', function() {
  return {
    restrict: 'A',
    link: function(scope, element) {
      element.bind('click', function() {
        alert('click');
      })
    }
  };
});

app.controller('Controller', ["$scope", function($scope) {
}]);