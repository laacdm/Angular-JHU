(function () {
'use strict';

angular.module('ShoppingListApp', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {

  var itemAdder = this;

  itemAdder.itemQuantity = "";
  itemAdder.itemName = "";

  itemAdder.itemsToBuy = ShoppingListCheckOffService.getItemsToBuy();

  itemAdder.ListsUpdate = function (itemIndex) {
   ShoppingListCheckOffService.ListsUpdate(itemIndex);
  };

}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {

  var itemAdder = this;

  itemAdder.items = ShoppingListCheckOffService.getItemsBought();
}

function ShoppingListCheckOffService() {

  var service = this;

  // List of items to buy
  var itemsToBuy = [{itemName: "cookies", itemQuantity: 10}, {itemName: "soft drinks", itemQuantity: 5},
                    {itemName: "chips", itemQuantity: 5}, {itemName: "peanuts", itemQuantity: 3},
                    {itemName: "orange juice", itemQuantity: 3}];

  // List of items to already bought
  var itemsBought = [];

  service.ListsUpdate = function (itemIndex) {
    itemsBought.push(itemsToBuy[itemIndex]);
    itemsToBuy.splice(itemIndex, 1);
  };

  service.getItemsToBuy = function () {
    return itemsToBuy;
  };

  service.getItemsBought = function () {
    return itemsBought;
  };
}
})();
