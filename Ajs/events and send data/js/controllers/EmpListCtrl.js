(function() {
  'use strict';
  
  angular
    .module('testApp')
    .controller('EmpListCtrl', ['$scope', 'EmpService', EmpListCtrl]);
  
  function EmpListCtrl(scope, EmpService) {
    scope.header = 'header';
    var promise = EmpService.allEmps();
    promise
      .then(function(data) {
        scope.emps = data.data;
        scope.$emit('DONE', data.data);
       }, function() {
         
       });
      // .success(function(data) {
      //   scope.emps = data;
      // })
      // .error(function() {
        
      // });
  }
}());