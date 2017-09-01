(function(global, angular, undefined) {
  'use strict';

  angular.module('ngCors', [])
  .config(['$httpProvider', function($httpProvider) {
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
  }]);


  angular.module('angular-cors', ['ngCors']);

}(this, angular));
