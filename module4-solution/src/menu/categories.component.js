(function () {
'use strict';

angular.module('Data')
.component('categories', {
  templateUrl: 'src/menu/templates/categories.template.html',
  bindings: {
    items: '<'
  }
});

})();
