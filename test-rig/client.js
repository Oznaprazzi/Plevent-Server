var app = angular.module('app', []);


app.controller('myCtrl', function($scope, $http){
    $scope.groceries = [];

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
                updateList();
            });
        }
    }

    $scope.delItems = () => {
        for(var item of $scope.groceries){
            if(item.selected){
                deleteItem(item._id);
            }
        }
    }

    $scope.init = () => {
        updateList();
    }

    function deleteItem (id) {
        $http.delete(`http://localhost:8080/grocery/item/${id}`).then(res => {
            updateList();
        });
    }

    function updateList() {
        $http.get('http://localhost:8080/events/event').then(res => {
            // Algorithm may be slow...
            for(item of res.data){
                item.selected = false;
            }
            $scope.groceries = res.data;
        });
    }
});
