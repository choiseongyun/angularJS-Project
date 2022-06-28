'use strict';

/**
 * @ngdoc function
 * @name myToDoApp.controller:TodoCtrl
 * @description
 * # TodoCtrl
 * Controller of the myToDoApp
 */
angular.module('myToDoApp')
  .controller('TodoCtrl', function ($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.todos=['Item1','Item2','Item3']
  });
