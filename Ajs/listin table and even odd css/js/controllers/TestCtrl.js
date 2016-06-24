(function() {
  'use strict';
  
  angular
    .module('testApp')
    .controller('TestCtrl', ['$scope', TestCtrl]);
  
  function TestCtrl(scope) {
    scope.header = 'header';
    scope.emps = [
      {id: 1, firstName: 'Ashish', lastName: 'Kumar', doj: new Date('20 Feb 2006')},
      {id: 2, firstName: 'Parma', lastName: 'Dhuri', doj: new Date('4 Apr 2016')},
      {id: 3, firstName: 'Kedar', lastName: 'Naik', doj: new Date('1 Jan 2015')},
      {id: 4, firstName: 'Rahul', lastName: 'Pandey', doj: new Date('14 May 2014')},
      {id: 5, firstName: 'Kundan', lastName: 'Shinde', doj: new Date('8 June 2016')}
    ];
  }
}());