(function() {
  'use strict';

  angular.module('app', [
    'ui.router',
    'ngResource',
    'ngAnimate',
    'hljs',
    'angularMoment',
    'foundation',
    'foundation.dynamicRouting',
    'foundation.dynamicRouting.animations',
    'app.projects',
    'app.builds',
    'app.jobs',
    'app.logs'
  ])
    .config(config)
    .run(run)
  ;

  angular.module('app').config(['$httpProvider', function ($httpProvider) {
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
  }])

  angular.module('app').config(function (hljsServiceProvider) {
    hljsServiceProvider.setOptions({
      // replace tab with 4 spaces
      tabReplace: '    '
    });
  })

  config.$inject = ['$urlRouterProvider', '$locationProvider'];

  angular.module('app').filter('capitalize', function() {
      return function(input) {
        return (!!input) ? input.charAt(0).toUpperCase() + input.substr(1).toLowerCase() : '';
      }
  });

  function config($urlProvider, $locationProvider) {
    $urlProvider.otherwise('/');

    $locationProvider.html5Mode({
      enabled: false,
      requireBase: false
    });

    $locationProvider.hashPrefix('!');
  }

  function run() {
    FastClick.attach(document.body);
  }

  // consume api for templates/views
  angular.module('app').run(['$rootScope', '$state', '$stateParams',
    function ($rootScope, $state, $stateParams) {
      $rootScope.$state = $state;
      $rootScope.$stateParams = $stateParams;
  }])
})();
