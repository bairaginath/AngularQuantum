/**
 * Created by veradocs-web on 9/26/2015.
 */

'use strict';

var myjs=angular.module('myApp.myjs', ['ngRoute']);

  myjs.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/javascript', {
      templateUrl: '/javascript_tutorial/myjs.html',
      controller: 'MyJSController'
    });
  }]);

myjs.controller('MyJSController',function($scope){




});

