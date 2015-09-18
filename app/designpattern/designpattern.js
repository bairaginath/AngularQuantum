/**
 * Created by veradocs-web on 7/19/2015.
 */


var designpattern=angular.module('myApp.designpattern', ['ngRoute']);

designpattern.config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/designpattern', {
            templateUrl: 'designpattern/designpattern.html',
            controller: 'DesignPatternController'
        });
    }])

designpattern.service("ParseService",function($parse){


    this.parsedAuthorNameFn = $parse('author.name');
    this.parsedTitleFn = $parse('title');
    this.parsedDoSomethingFn = $parse('doSomething(author.name)');

})

designpattern.controller('DesignPatternController', function($scope,ParseService) {

    var context = {
        author: { name: 'Umur'},
        title: '$parse Service',
        doSomething: function (something) {
            alert(something);
        }
    };
   //$parse Converts Angular expression into a function.
    console.log(ParseService.parsedAuthorNameFn(context));
    console.log(ParseService.parsedTitleFn(context));
    var parsedDoSomething =ParseService.parsedDoSomethingFn(context);

    $scope.name = 'bairaginath.in';
    $scope.counter = 0;
    //watching change in name value
    $scope.$watch('name', function (newValue, oldValue) {
        $scope.counter = $scope.counter + 1;
    });

    $scope.obj = { value: 1 };
    document.getElementById('world') .addEventListener('click', function() {
        console.log($scope.obj.value++);
        //update value
        // if it commented below line it does not incremented
        $scope.$digest();
    });



    $scope.datetime = new Date();
    //outside angular context
    document.getElementById("updateTimeButton").addEventListener('click',
        function () {
            //update the value
            $scope.$apply(function () {
                console.log("update time clicked");
                $scope.datetime = new Date();
                console.log($scope.datetime);
            });
        });



    });