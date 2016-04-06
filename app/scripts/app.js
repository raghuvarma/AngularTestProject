'use strict';

/**
 * @ngdoc overview
 * @name angularTestProjectApp
 * @description
 * # angularTestProjectApp
 *
 * Main module of the application.
 */
angular
  .module('angularTestProjectApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
