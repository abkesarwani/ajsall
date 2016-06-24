(function() {
  'use strict';
  
  angular
    .module('testApp')
    .controller('TestCtrl', ['$scope', TestCtrl]);
  
  function TestCtrl(scope) {
    scope.emps = [
      {id: 1, firstName: 'Ashish', lastName: 'Kumar',onBench:true},
      {id: 2, firstName: 'Parma', lastName: 'Dhuri',onBench:false},
      {id: 3, firstName: 'Kedar', lastName: 'Naik',onBench:true},
      {id: 4, firstName: 'Rahul', lastName: 'Pandey',onBench:true},
      {id: 5, firstName: 'Kundan', lastName: 'Shinde',onBench:false}
    ];
  }
}());