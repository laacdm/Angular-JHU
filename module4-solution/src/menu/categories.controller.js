(function () {
'use strict';

angular.module('Data')
.controller('CategoriesController', CategoriesController);


CategoriesController.$inject = ['MenuDataService','items'];
function CategoriesController(MenuDataService, items) {
  var categories = this;
  categories.items = items;
}

})();
