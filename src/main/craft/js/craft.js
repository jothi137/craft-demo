var craft = angular.module('craft', ['ngRoute']);

craft.controller('mainController', function($scope) {
    // create a message to display in our view
    $scope.message = 'Hello World!';
});