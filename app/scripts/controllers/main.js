'use strict';

/**
 * @ngdoc function
 * @name angularTestProjectApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularTestProjectApp
 */
angular.module('angularTestProjectApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
