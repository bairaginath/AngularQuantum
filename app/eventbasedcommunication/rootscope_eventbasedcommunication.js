'use strict';

var rootscope_eventbasedcommunication=angular.module('myApp.rootscope_eventbasedcommunication', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/rootscope_eventbasedcommunication', {
            templateUrl: 'eventbasedcommunication/rootscope_eventbasedcommunication.html',
            controller: 'RootScopeEventBasedCommunicationController'
        });
    }])

rootscope_eventbasedcommunication.controller('RootScopeEventBasedCommunicationController', function($rootScope) {
    $rootScope.world="Hecker InSide";


    });

rootscope_eventbasedcommunication.controller('ParentsRootScopeController', function($rootScope) {

    $rootScope.$on('eventName',function(event,args){

        $rootScope.message=args.message;
        console.log($rootScope.message);

    });

    $rootScope.$on('eventName1',function(event,args){

        $rootScope.message1=args.message;
        console.log($rootScope.message1);

    });



});

rootscope_eventbasedcommunication.controller('ChildRootScopeController', function($scope,$rootScope) {

    $scope.handleClickScope=function(msg){
        $scope.$emit('eventName',{message:msg})
    }

    $scope.handleClickRootScope=function(msgRoot){
        $scope.$emit('eventName',{message:msgRoot})
    }

    $rootScope.$on('eventName1',function(event,args){

        $rootScope.message2=args.message;
        console.log($rootScope.message2);

    });

});

rootscope_eventbasedcommunication.controller('ChildScopeController', function($scope) {

    $scope.handleClick=function(msg){
        console.log("In side childScopeController "+msg);
        $scope.$emit('eventName1',{message:msg})
    }



});


rootscope_eventbasedcommunication.controller('ParentRootScopeControllerBroadcast',function($scope,$rootScope){

    $scope.handleClick = function (msg) {
        $rootScope.$broadcast('eventName', { message: msg });
    };

});

rootscope_eventbasedcommunication.controller('ChildRootScopeControllerBroadcast',function($scope,$rootScope){
    $scope.$on('eventName', function (event, args) {
        $rootScope.message3 = args.message;
        console.log($rootScope.message3);
    });
});

rootscope_eventbasedcommunication.controller('ChildScopeControllerBroadcast',function($scope){
    $scope.$on('eventName', function (event, args) {
        $scope.message4 = args.message;
        console.log($scope.message4);
    });
});


