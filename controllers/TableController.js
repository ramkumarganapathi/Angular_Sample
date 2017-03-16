//(function() {
//    angular.module("todoApp")
//        .controller("LoginController", LoginController);
////    todoController.$inject = ["ToDoService"];
//
//    function LoginController() {
//        var vm = this;
//        vm.username = "";
//        vm.password = "";
//   
//        vm.login = function() {
//        	alert('login');
//        	//$location.path("./views/main.html");
//            
//        }
//
//    }
//})();

(function() {
var app = angular.module("todoApp");

app.controller("TableController",function($scope, TableService, $location){
	
	$scope.createTable = function() {   	
    	TableService.createTable().then(function(result){
    		$scope.data = result;
    	},
    	function(error){
    		alert(error);
    	});
    	
    	
//    var result=LoginService.login();
//    		alert(result);
    	
    	
    	//$location.path("/main");
        
    }
	
	$scope.$watch('lgCtrl.username',function(oldvalue, newvalue){
		alert(oldvalue);
		alert(newvalue);
		
	})
	
	
})
})();