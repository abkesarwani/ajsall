(function() {
  'use strict';

  angular
    .module('testApp')
    .controller('EmpDetailsCtrl', ['$scope', 
                                   '$routeParams', 
                                   '$location', 
                                   'EmpService', 
                                   EmpDetailsCtrl]);

  function EmpDetailsCtrl(scope, routeParams, location, EmpService) {
    var id = parseInt(routeParams.id, 10);

    scope.emp = EmpService.getEmp(id);

    scope.save = function() {
      EmpService.saveEmp(id, scope.emp);
      location.path('/emps');
    };
  }
}());