'use strict';



// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.search',
  'myApp.login',
  'myApp.version',
  'myApp.signup',
  'myApp.directives',
  'myApp.di',
  'myApp.designpattern',
  'myApp.scope_eventbasedcommunication',
  'myApp.rootscope_eventbasedcommunication',
  'myApp.MyTest',
  'myApp.parallel_eventbasedcommunication',
  'myApp.myjs'

]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/search'});
}]);
