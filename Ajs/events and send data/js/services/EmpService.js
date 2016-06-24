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
        return http.get(baseUrl + '/' + id);
      };
      
      this.saveEmp = function(id, emp) {
        return http.put(baseUrl + '/' + id, emp);
      };
    }]);
}());