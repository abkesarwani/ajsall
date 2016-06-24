(function() {
  'use strict';
  
  angular
    .module('testApp')
    .controller('TestCtrl', ['$scope', '$rootScope', TestCtrl]);
  
  function TestCtrl(scope, rootScope) {
    scope.response = 'Not Done';
    
    rootScope.$on('DONE', function(e, data) {
      scope.response = JSON.stringify(data);
    });
  }
}());