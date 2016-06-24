(function() {
  'use strict';
  
  angular
    .module('testApp')
    .controller('EmpListCtrl', ['$scope', EmpListCtrl]);
  
  function EmpListCtrl(scope) {
    scope.header = 'header';
    scope.emps = emps;
    
    scope.linkToDetails = 'emp-details';
  }
}());