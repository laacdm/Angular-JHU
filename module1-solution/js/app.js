(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {

  var msg = "Please enter data!"
  $scope.LunchState = ""

  $scope.sayMessage = function() {
    if ($scope.LunchState === "") {
      msg = "Please enter data!"
    }
    else if ($scope.LunchState.split(",").length <= 3) {
      msg = "Enjoy!";
    }
    else {
      msg = "Too much!"
    }
   return msg;
  }
}

})();
