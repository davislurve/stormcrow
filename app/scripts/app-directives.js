'use strict';

angular.module('stormCrowApp')
   .directive('diceroller', function() {
      return {
         restrict: 'E',
         templateUrl: '/views/modules/dice-roller/dice-roller.html'
      };
   })
   .directive('stopEvent', function() {
      return {
         restrict: 'A',
         link: function(scope, element, attr) {
            element.bind(attr.stopEvent, function(e) {
               e.stopPropagation();
            });
         }
      };
   });