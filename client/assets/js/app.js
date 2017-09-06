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

  app.config(['$httpProvider', function ($httpProvider) {
      $httpProvider.defaults.useXDomain = true;
      delete $httpProvider.defaults.headers.common['X-Requested-With'];
  }]);

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
  app.controller("projectsController", function ($scope, $http) {
    $http({method: 'GET',
      url: '//40.76.22.204/v1/projects',
      method: 'JSONP',
      headers: {
          'Accept': 'application/json, text/javascript',
              'Content-Type': 'application/json; charset=utf-8'
      },
      isArray: false,
      callback: 'JSON_CALLBACK'
    }).then(function successCallback(response) {
        $scope.projects = response.data;
    },
      function errorCallback(response) {}
    );
  });

  // consume api for templates/views
  app.controller("projectController", function ($scope, $http) {
    $http({method: 'GET',
      url: '//40.76.22.204/v1/project/acid-830c16d4aaf6f5490937ad719afd8490a5bcbef064d397411043ac',
      method: 'JSONP',
            headers: {
                'Accept': 'application/json, text/javascript',
                    'Content-Type': 'application/json; charset=utf-8'
            },
            isArray: false,
            callback: 'JSON_CALLBACK'
    }).then(function successCallback(response) {
        $scope.project = response.data;
    },
      function errorCallback(response) {}
    );
  });

  app.controller("buildsController", function ($scope, $http) {
    $http({method: 'GET',
      url: '//40.76.22.204/v1/builds',
      method: 'JSONP',
            headers: {
                'Accept': 'application/json, text/javascript',
                    'Content-Type': 'application/json; charset=utf-8'
            },
            isArray: false,
            callback: 'JSON_CALLBACK'
    }).then(function successCallback(response) {
        $scope.builds = response.data;
    },
      function errorCallback(response) {}
    );
  });

  app.controller("buildController", function ($scope, $http) {
    $http({method: 'GET',
      url: '//40.76.22.204/v1/build/01brzpbywcc5xjfn13ftx3e1p3/',
      method: 'JSONP',
            headers: {
                'Accept': 'application/json, text/javascript',
                    'Content-Type': 'application/json; charset=utf-8'
            },
            isArray: false,
            callback: 'JSON_CALLBACK'
    }).then(function successCallback(response) {
        $scope.build = response.data;
    },
      function errorCallback(response) {}
    );
  });

  app.controller("jobsController", function ($scope, $http) {
    $http({method: 'GET',
      url: '//40.76.22.204/v1/build/01brzpbywcc5xjfn13ftx3e1p3/jobs',
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    }).then(function successCallback(response) {
        $scope.jobs = response.data;
    },
      function errorCallback(response) {}
    );
  });

  app.controller("jobController", function ($scope, $http) {
    $http({method: 'GET',
      url: '//40.76.22.204/v1/job/node-runner-1504302282234-800550b4',
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    }).then(function successCallback(response) {
        $scope.job = response.data;
    },
      function errorCallback(response) {}
    );
  });

})();
