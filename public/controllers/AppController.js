var myApp = angular.module('myApp', []);

myApp.controller('AppController', [
    '$scope',
    '$http',
    '$location',
    function ($scope, $http, $location) {
    $http.get('/clients').then(function (response) {
        console.log('Data recieved from the server');
        console.log(response);
        $scope.clients = response.data;
    });

    $scope.addClient = function () {
        console.log('Adding new client....');
        $http.post('/clients', $scope.client).then(function (response) {
            console.log('Client Added');
            window.location.href = '/';
        });
    }
}]);