(function() {
  'use strict';
  
  angular
    .module('testApp')
    .controller('TestCtrl', ['$scope', TestCtrl]);
  
  function TestCtrl(scope) {
    scope.add = function(a, b) {
      a = parseInt(a, 10);
      b = parseInt(b, 10);
      scope.sum = a + b;
    };
  }
}());