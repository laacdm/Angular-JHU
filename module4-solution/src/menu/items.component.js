(function () {
'use strict';

angular.module('Data')
.component('items', {
  templateUrl: 'src/menu/templates/items.template.html',
  bindings: {
    elements: '<'
  }
});

})();
