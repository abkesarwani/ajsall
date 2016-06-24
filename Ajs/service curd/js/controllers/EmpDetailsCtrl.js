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

    EmpService
      .getEmp(id)
      .then(function(data) {
        scope.emp = data.data;
      }, function() {
        
      });

    scope.save = function() {
      EmpService.saveEmp(id, scope.emp);
      location.path('/emps');
    };
  }
}());