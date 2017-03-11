(function() {
    angular.module("todoApp")
        .controller("TodoController", todoController);
    todoController.$inject = ["ToDoService"];

    function todoController(ToDoService) {
        var vm = this;
        vm.titleName = "ToDo Application";
        vm.listName = "";
        vm.items = [];
        var service = ToDoService;
        vm.isShowDiv = true;
        var printFunc = function(s) {
            console.log("print it" + s);
        };
        vm.addToList = function() {

            if (service.isValidItem(vm.listName, printFunc)) {
                vm.items.push(vm.listName);
                vm.listName = "";
                console.log(vm.items);
            }
        }

    }
})();