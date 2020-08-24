(function() {
"use strict";

angular.module('common', [])
.constant('ApiPath', 'https://tranquil-escarpment-78252.herokuapp.com/')
.config(config);

config.$inject = ['$httpProvider'];
function config($httpProvider) {
  $httpProvider.interceptors.push('loadingHttpInterceptor');
}

})();
