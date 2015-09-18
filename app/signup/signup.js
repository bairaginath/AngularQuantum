/**
 * Created by veradocs-web on 6/5/2015.
 */


angular.module('myApp.signup',['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/signup', {
            templateUrl: 'signup/signup.html',
            controller: 'SignUpController'
        });
    }])
    .controller('SignUpController', [function() {

    }]);
