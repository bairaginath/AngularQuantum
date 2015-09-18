'use strict';

angular.module('myApp.login', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/login', {
    templateUrl: 'login/login.html',
    controller: 'LoginController'
  });
}])

.controller('LoginController', ['$http','$scope',function($http,$scope) {

        $scope.loginClick=function(){
            console.log($scope.username+""+$scope.password);
            $http.post("http://127.0.0.1:8000/v1/api/login/",{"email":$scope.username,"password":$scope.password },{'content-type':'application/json'})
                .success(function(res){console.log(res); $scope.output=res; })
                .error(function(err){console.log(err);$scope.output=err;});
        }




}]);