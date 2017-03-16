(function() {
    angular.module("todoApp")
        .service("ToDoService", function() {
            var self = this;
            self.isValidItem = function(itemName, callBack) {
                if (itemName) {
                    callBack(itemName);
                    return true;
                } else {
                    return false;
                }
            };
        });


})();