'use strict';

var di=angular.module('myApp.di', ['ngRoute']);

var MyFunc = function() {

    this.name = "default name";

    this.$get = function() {
        this.name = "new name"
        return "Hello from MyFunc.$get(). this.name = " + this.name;
    };



    return "Hello from MyFunc(). this.name = " + this.name;
};

di.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/di', {
    templateUrl: 'di/di.html',
    controller: 'DIController'
  });
}])

//A service is an injectable constructor.
di.service("WorldService",function(){

     this.display=function(){
         return "World Display"
     }
     this.show=function(){
         return "World Show"
     }

})

//A factory is an injectable function.
di.factory("WorldFactory",function(){
//Provider 'WorldFactory' must return a value from $get factory method.


    this.display=function(){
        return "World Display"
    }
    this.show=function(){
        return "World Show"
    }

    return this;
})

//A provider is a configurable factory.
di.provider("World",function(){
    this.name='';
    this.phone="";
    this.setName=function(newName){
        this.name=newName;
    }
    this.setPhone=function(newPhone){
        this.phone=newPhone;
    }
    this.$get=function(){
        return this;
    }
    this.getName=function(){
        return this.name;
    }
    this.getPhone=function(){
        return this.phone;
    }
})

di.config(function(WorldProvider){

    WorldProvider.setName("bairagi")
    WorldProvider.setPhone("8867887364")
})


di.service( 'myService', MyFunc )
di.factory( 'myFactory', MyFunc )
di.provider( 'myProv', MyFunc )

di.controller('DIController', function($scope,myService, myFactory, myProv,WorldService,WorldFactory,World) {

      $scope.serviceOutput = "myService = " + myService;
      $scope.factoryOutput = "myFactory = " + myFactory;
     $scope.providerOutput = "myProvider = " + myProv;

    $scope.worldServiceOutput="WorldService "+WorldService.show();
    $scope.worldFactoryOutput="WorldFactory "+WorldFactory.show();
    $scope.worldProviderOutput="WorldProvider "+World.getPhone();



});

