var app = angular.module("todoApp");
app.service("LoginService", function($http, $q) {
    var vm = this;
    this.success = false;
    this.error = null;
    var status = $q.defer();
    this.login = function() {
        $http({
            url: "api/login.json"
        }).then(function mySucces(response) {
            status.resolve(response.data);
        }, function myError(response) {
            status.reject(response);
        });
        return status.promise;
    }
})
