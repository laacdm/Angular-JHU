(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/menu/templates/home.template.html'
  })

  // Premade list page
  .state('categories', {
    url: '/categories',
    templateUrl: 'src/menu/templates/main-categories.template.html',
    controller: 'CategoriesController as categories',
    resolve: {
     items: ['MenuDataService', function (MenuDataService) {
       return MenuDataService.getAllCategories();
     }]
    }
  })

  .state('items', {
    url: '/item/{categoryShortName}',
    templateUrl: 'src/menu/templates/main-items.template.html',
    controller: "ItemsController as items"
  });

}

})();
