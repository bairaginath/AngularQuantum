
'use strict';

var parallel_eventbasedcommunication=angular.module('myApp.parallel_eventbasedcommunication', ['ngRoute'])

parallel_eventbasedcommunication.config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/parallel_eventbasedcommunication', {
            templateUrl: 'eventbasedcommunication/parallel_eventbasedcommunication.html',
            controller: 'parallel_eventbasedcommunication'
        });
    }])

parallel_eventbasedcommunication.controller('parallel_eventbasedcommunication', [function() {

    }]);


parallel_eventbasedcommunication.controller('ParentEmitController', function($scope) {

    $scope.$on('eventName',function(event,args){

        $scope.message=args.message;
        console.log($scope.message);

    });
});

parallel_eventbasedcommunication.controller('ParallelOneEmitController', function($scope) {

    $scope.$on('eventName',function(event,args){

        $scope.message1=args.message;
        console.log($scope.message1);

    });
});


parallel_eventbasedcommunication.controller('ParallelTwoEmitController', function($scope) {

    $scope.handleClick=function(msg){
        console.log("In Side Handle Click");
        $scope.$emit('eventName',{message:msg})
    }

});
