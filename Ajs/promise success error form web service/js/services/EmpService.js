(function() {
  'use strict';
  
  angular
    .module('testApp')
    .service('EmpService', ['$http', function(http) {
      var baseUrl = 'https://empapi-ashishku.c9.io/api/emps';
      
      this.allEmps = function() {
        return http.get(baseUrl);
      };
      
      this.getEmp = function(id) {
        var emp;
        emps.forEach(function(e) {
          if(e.id === id) {
            emp = e;
          }
        });
        
        return emp;
      };
      
      this.saveEmp = function(id, emp) {
        emps.forEach(function(e) {
          if(e.id === id) {
            e = emp;
          }
        });
      };
    }]);
}());