
craft.controller('mainController', function($scope, mainService) {

    var root = "http://jsonplaceholder.typicode.com";

    function populateUsers(results) {
        $scope.users = results;
    }

    function handleError() {
        alert("An error occurred while processing. Please try again.");
    }
    // create a message to display in our view
    $scope.message = 'Hello World!';

    $scope.getUsers = function () {
        mainService.request({
            method: 'GET',
            url: root + "/users"
        }, populateUsers, handleError);
    }
});
