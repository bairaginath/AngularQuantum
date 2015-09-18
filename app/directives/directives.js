/**
 * Created by veradocs-web on 7/15/2015.
 */


'use strict';

angular.module('myApp.directives', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/directives', {
            templateUrl: 'directives/directives.html',
            controller: 'DirectivesController'
        });
    }])

    .directive('helloWorld', function() {
        return {
            restrict: 'AEC',
            replace: 'true',
            template: '<h3>Hello World!!</h3>'
        };
    })
    .directive('jamesWorld', function() {
        return {
            restrict: 'AE',
            replace: true,
            template: '<p style="background-color:{{color}}">The world is not enough',
            link: function(scope, elem, attrs) {
                elem.bind('click', function() {
                    elem.css('background-color', 'white');
                    scope.$apply(function() {
                        scope.color = "white";
                    });
                });
                elem.bind('mouseover', function() {
                    elem.css('cursor', 'pointer');
                });
            }
        };
    })

    .directive('userinfo', function() {
        var directive = {};

        directive.restrict = 'E'; /* restrict this directive to elements */

        directive.compile = function(element, attributes) {

            // do one-time configuration of element.
            element.css("border", "1px solid #cccccc");

            var linkFunction = function($scope, element, attributes) {
                // bind element to data in $scope
                element.html("This is the new content: " + $scope.firstName);
                element.css("background-color", "#ffff00");
            }

            return linkFunction;
        }

        return directive;
    })
    .directive('mytransclude', function() {
        var directive = {};

        directive.restrict = 'E'; /* restrict this directive to elements */
        directive.transclude = true;
        directive.template = "<div class='myTransclude' ng-transclude></div>";

        return directive;
    })

    .controller('DirectivesController', ['$scope',function($scope) {

        $scope.cssClass = "notificationDiv";



        $scope.firstName = "Jakob";

        $scope.doClick = function() {
            console.log("doClick() called");
        }

    }]);
