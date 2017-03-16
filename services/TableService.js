var app = angular.module("todoApp");
app.service("TableService", function($http, $q) {
    var vm = this;
    this.success = false;
    this.error = null;
    var status = $q.defer();
    this.createTable = function() {
        alert('Prabha');
        $http({
            url: "api/package.json",
            responseType: 'json'
        }).then(function mySucces(response) {
            status.resolve(response.data);
        }, function myError(response) {
            status.reject(response);
        });
        return status.promise;
    }
})
