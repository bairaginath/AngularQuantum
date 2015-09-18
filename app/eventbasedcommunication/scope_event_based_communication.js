/**
 * Created by veradocs-web on 7/21/2015.
 */

var scope_eventbasedcommunication=angular.module('myApp.scope_eventbasedcommunication', ['ngRoute'])

scope_eventbasedcommunication.config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/scope_eventbasedcommunication', {
            templateUrl: 'eventbasedcommunication/scope_event_based_communication.html',
            controller: 'ScopeEventBasedCommunicationController'
        });
    }])

scope_eventbasedcommunication.controller('ScopeEventBasedCommunicationController', [function() {

    }]);

scope_eventbasedcommunication.controller('ParentsController', function($scope) {

    $scope.$on('eventName',function(event,args){

        $scope.message=args.message;
        console.log($scope.message);

    });
});

    scope_eventbasedcommunication.controller('ChildController', function($scope) {

         $scope.handleClick=function(msg){
             $scope.$emit('eventName',{message:msg})
         }

        });

  scope_eventbasedcommunication.controller('ParentControllerBroadcast',function($scope){

      $scope.handleClick = function (msg) {
          $scope.$broadcast('eventName', { message: msg });
      };

  });

  scope_eventbasedcommunication.controller('ChildOneController',function($scope){
      $scope.$on('eventName', function (event, args) {
          $scope.message1 = args.message;
          console.log($scope.message1);
      });
  });

scope_eventbasedcommunication.controller('ChildTwoController',function($scope){
    $scope.$on('eventName', function (event, args) {
        $scope.message2 = args.message;
        console.log($scope.message2);
    });
});

