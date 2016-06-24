
(function() {
  'use strict';
  
  angular
    .module('testApp')
    .filter('YesNo', function() {
      return function (input,fullform) {
        if(input)
        {
          if(fullform)
          {
            return 'yes';
          }
          else
          {
            return 'Y';
            
          }
        }
        else
        {
          
          if(fullform)
          {
            return 'No';
          }
          else
          {
            return 'N';
            
          }
          
        }
      //  return input ? 'Yes' : 'No';
      }
    });
}());