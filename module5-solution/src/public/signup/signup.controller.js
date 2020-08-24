(function() {
'use strict';

angular.module('public')
.controller('SignupController', SignupController);

SignupController.$inject = ['MenuService'];
function SignupController (MenuService) {
  var $Ctrl = this;
  $Ctrl.user = {};
  $Ctrl.favoriteDish = {};

  $Ctrl.showError = false;
  $Ctrl.showMessage = false;

  $Ctrl.signup = function(form) {
    $Ctrl.showError = false;
    $Ctrl.showMessage = false;

      if(form.$invalid) {
        return;
        }

      MenuService.getFavoriteDish($Ctrl.user.favoriteDish).then(function(response) {
        $Ctrl.user.favoriteDishDetails = response.data;
        MenuService.saveUser($Ctrl.user);
        $Ctrl.showMessage = true;
      },

      function(error) {
        $Ctrl.showError = true;
      });
    }
  };
})();
