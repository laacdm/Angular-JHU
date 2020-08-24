(function() {
'use strict';
angular.module('public')
.controller('InfoController', InfoController);

InfoController.$inject = ['MenuService', 'ApiPath'];
function InfoController(MenuService, ApiPath) {

  var $Ctrl = this;

  $Ctrl.apiPath = ApiPath;
  $Ctrl.signedUp = false;
  $Ctrl.user = MenuService.getUser();

  if (angular.equals($Ctrl.user, {})) {
    $Ctrl.signedUp = false;
  }
  else {
    $Ctrl.signedUp = true;
  }
};
})();
