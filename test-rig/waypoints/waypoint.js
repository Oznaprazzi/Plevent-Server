var app = angular.module('app', []);


app.controller('myCtrl', function($scope, $http){
    $scope.results = [];

    $scope.send = () => {
        var query = $scope.address;
        var data = {
            query
        }
        console.log(data);
        $http.post('http://localhost:8080/waypoint/address', data).then(res => {
            console.log(res.data);
        }).catch(err => {
            console.log(err);
        })
    }
});
