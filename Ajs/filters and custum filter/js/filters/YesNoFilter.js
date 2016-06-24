(function() {
  'use strict';
  
  angular
    .module('testApp')
    .filter('YesNo', function() {
      return function (input) {
        return input ? 'Yes' : 'No';
      }
    });
}());