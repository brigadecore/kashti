(function() {
  'use strict';

  var app =  angular.module('application', [
    'ui.router',
    'ngAnimate',

    //foundation
    'foundation',
    'foundation.dynamicRouting',
    'foundation.dynamicRouting.animations'
  ])
    .config(config)
    .run(run)
  ;

  config.$inject = ['$urlRouterProvider', '$locationProvider'];

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
  app.controller("projectController", function ($scope, $http) {
    $http({method: 'GET',
      url: 'http://localhost:7745/v1/project/acid-830c16d4aaf6f5490937ad719afd8490a5bcbef064d397411043ac/',
      headers: {
        // 'Access-Control-Allow-Origin': 'http://localhost'
      }
    })

    .success(function (response){
      $scope.projects = response.data;
    })

  });

})();
