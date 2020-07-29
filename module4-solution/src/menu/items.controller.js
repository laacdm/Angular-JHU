(function () {
'use strict';

angular.module('Data')
.controller('ItemsController', ItemsController);

ItemsController.$inject = ['MenuDataService', '$stateParams'];
function ItemsController(MenuDataService, $stateParams) {
  var items = this;

  var promise = MenuDataService.getItemsForCategory($stateParams.categoryShortName);
  promise.then(function(response) {
    items.partsList = response.menu_items;
  });
}

})();
