var app = angular.module('app', []);


app.controller('myCtrl', function($scope, $http){
    const user = 'You';
    $scope.logs = []; // record of conversation

    $scope.send = () => {
        const message = $scope.message;

        var body = {
            user,
            message
        }
        $scope.logs.push(body);
        $http.post('http://localhost:8080/chatbot', body).then(res => {
            var reply = res.data;
            var botMsg = {
                user: 'Bot',
                message: reply.message
            }
            $scope.logs.push(botMsg);
            console.log($scope.logs);
        });
    }
});
