var app = angular.module('app', []);


app.controller('myCtrl', function($scope, $http){

    $scope.waypoints = [];

    $scope.init = () => {
        updateList();
    }

    $scope.send = () => {
        const data = {
            title: $scope.title,
            address: $scope.address,
            longitude: parseFloat($scope.longitude),
            latitude: parseFloat($scope.latitude)
        }
        console.log(data);
        $http.post('http://localhost:8080/waypoints/point', data).then(res => {
            console.log(res);
        });
    }

    function updateList(){
        $http.get('http://localhost:8080/waypoints').then(res => { // this route is not defined anymore
            $scope.waypoints = res.data;
            console.log(res.data);
        });
    }
});
