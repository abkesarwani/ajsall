(function() {
  'use strict';
  
  angular
    .module('testApp')
    .controller('EmpDetailsCtrl', ['$scope', '$routeParams', '$location', EmpDetailsCtrl]);
  
  function EmpDetailsCtrl(scope, routeParams, location) {
    var id = parseInt(routeParams.id, 10);
    
    emps.forEach(function(e) {
      if (e.id === id) {
        scope.emp = e;
      }
    });
    
    scope.save = function() {
      emps.forEach(function(e) {
      if (e.id === id) {
        e = scope.emp;
        location.path('/emps');
      }
    });
    };
  }
}());