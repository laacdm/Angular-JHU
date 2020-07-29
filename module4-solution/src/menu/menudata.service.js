(function () {
'use strict';

angular.module('Data')
.service('MenuDataService', MenuDataService)
.constant('BasePath', "https://davids-restaurant.herokuapp.com/");

MenuDataService.$inject = ['$http', 'BasePath']
function MenuDataService($http, BasePath) {
  var service = this;

  service.getAllCategories = function() {
    return $http({ method: 'GET',
      url: (BasePath + 'categories.json')
      }).then(function (response) {
        console.log(response.data)
        return response.data;
      });
  };

  service.getItemsForCategory = function(categoryShortName) {
    return $http({ method: 'GET',
      //url: (BasePath + 'menu_items.json?category=' + categoryShortName),
      url: (BasePath + 'menu_items.json'),
      params: {category: categoryShortName}
      }).then(function (response) {
        console.log(response.data)
        return response.data;
      });
    };
  }
})();
