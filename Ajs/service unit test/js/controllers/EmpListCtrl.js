(function() {
  'use strict';
  
  angular
    .module('testApp')
    .controller('EmpListCtrl', ['$scope', 'EmpService', EmpListCtrl]);
  
  function EmpListCtrl(scope, EmpService) {
    scope.header = 'header';
    scope.emps = EmpService.allEmps();
  }
}());