var app = angular.module('app', []);


app.controller('myCtrl', function($scope, $http){
    $scope.register = () => {
        var data = {
            username : $scope.username,
            password: $scope.password,
            lname: "Patel",
            fname: "dipen"
        }
        if(data.username != null && data.password != null){
            $http.post('http://localhost:8080/event', data).then(res => {
                console.log(res.data);    
            // alert(res.data);
            });
        }
        console.log(data);
    };

    $scope.login = () => {
        var data = {
            username: $scope.username,
            password: $scope.password

        }

        if(data.username != null && data.password != null){
            $http.post('http://localhost:8080/login', data).then(res => {
                alert(JSON.stringify(res.data));
            });
        }
        console.log(data);
    }

    $scope.addItem = () => {
        var data = {
            description: $scope.description
        }
        if(data.description != null){
            $http.post('http://localhost:8080/grocery/item', data).then(res => {
                console.log(res.data);
            });
        }
    }
});
