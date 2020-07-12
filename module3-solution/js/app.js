(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com/menu_items.json")
.directive('foundItems', FoundItemsDirective)

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var narrowItCtrl = this;

  narrowItCtrl.narrowItDown = function (searchTerm) {
    if (searchTerm) {
      var promise = MenuSearchService.getMatchedMenuItems(searchTerm);
      promise.then(function (response) {
        narrowItCtrl.found = response;
      })
      .catch(function (error) { console.log(error); });
    } else {
      narrowItCtrl.found = [];
    }
  };

  narrowItCtrl.removeItem = function (itemIndex) {
    this.lastRemoved = "Last item removed was " + narrowItCtrl.found[itemIndex].name;
  	//console.log("lastRemoved: " + this.lastRemoved);
    narrowItCtrl.found.splice(itemIndex, 1);
  };
};


MenuSearchService.$inject = ['$http', 'ApiBasePath'];
function MenuSearchService($http, ApiBasePath) {
  var service = this;
  service.getMatchedMenuItems = function (searchTerm) {
    return $http({
    method: "GET",
    url: (ApiBasePath)
    }).then(function (response) {
        var foundItems = [];
        console.log("Response leghth: " + response.data.menu_items.length)
        for ( var i = 0 ; i < response.data.menu_items.length; i++ ) {
          if ( response.data.menu_items[i].description.toLowerCase().indexOf(searchTerm.trim().toLowerCase()) !== -1 ) {
            foundItems.push(response.data.menu_items[i]);
            //console.log("foundItems test: " + foundItems[i].name)
          }
        };
      return foundItems;
    });
  };
};

function FoundItemsDirective() {
    var ddo = {
      templateUrl: 'loadResults.html',
      scope: {
        items: '<',
        onRemove: '&'
      },
    controller: FoundItemsDirectiveController,
    controllerAs: 'list',
    bindToController: true
    };
    return ddo;
};

function FoundItemsDirectiveController() {
  var list = this;

  //Returns true if list is empty
  list.checkFoundList = function () {
	return typeof list.items !== 'undefined' && list.items.length === 0
  };
};
})();
