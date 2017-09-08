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

  app.filter('trim', function () {
    return function(value) {
      if(!angular.isString(value)) {
          return value;
      };
      return value.replace(/^\s+|\s+$/g, '');
    };
  });

  // consume api for templates/views
  app.controller("projectsController", function ($scope, $http) {
    $http({
      method: 'GET',
      url: 'https://cors-anywhere.herokuapp.com/http://acid-api.technosophos.me:7745/v1/projects',
      isArray: true,
      headers: {
        'Accept': 'application/json, text/javascript',
        'Content-Type': 'application/json; charset=utf-8'
      }
    }).then(function successCallback(response) {
        $scope.projects = response.data;
    },
      function errorCallback(response) {}
    );
  });

  app.controller("projectController", function ($scope, $http) {

    // var myResource = $resource("https://cors-anywhere.herokuapp.com/http://acid-api.technosophos.me:7745/v1/project/:projectID",
    //   {projectID: '@id'},
    //     {enter : {
    //       method: "GET",
    //       isArray: false
    //     }
    //   });

    $http({method: 'GET',
      url: 'https://cors-anywhere.herokuapp.com/http://acid-api.technosophos.me:7745/v1/project/acid-830c16d4aaf6f5490937ad719afd8490a5bcbef064d397411043ac',
      isArray: true,
      headers: {
        'Accept': 'application/json, text/javascript',
        'Content-Type': 'application/json; charset=utf-8'
      }
    }).then(function successCallback(response) {
        $scope.project = response.data;
    },
      function errorCallback(response) {}
    );
  });

  app.controller("buildsController", function ($scope, $http) {
    $http({method: 'GET',
      url: 'https://cors-anywhere.herokuapp.com/http://acid-api.technosophos.me:7745/v1/project/acid-830c16d4aaf6f5490937ad719afd8490a5bcbef064d397411043ac/builds',
      headers: {
        'Accept': 'application/json, text/javascript',
        'Content-Type': 'application/json; charset=utf-8'
      },
      isArray: true
    }).then(function successCallback(response) {
        $scope.builds = response.data;
    },
      function errorCallback(response) {}
    );
  });

  app.controller("buildController", function ($scope, $http) {
    $http({method: 'GET',
      url: 'https://cors-anywhere.herokuapp.com/http://acid-api.technosophos.me:7745/v1/build/01bscavbceeypx00mc6swagqzj',
      headers: {
        'Accept': 'application/json, text/javascript',
        'Content-Type': 'application/json; charset=utf-8'
      },
      isArray: true
    }).then(function successCallback(response) {
        $scope.build = response.data;
    },
      function errorCallback(response) {}
    );
  });

  app.controller("jobsController", function ($scope, $http) {
    $http({method: 'GET',
      url: 'https://cors-anywhere.herokuapp.com/http://acid-api.technosophos.me:7745/v1/build/01brzpbywcc5xjfn13ftx3e1p3/jobs',
      headers: {
        'Accept': 'application/json, text/javascript',
        'Content-Type': 'application/json; charset=utf-8'
      },
      isArray: true
    }).then(function successCallback(response) {
        $scope.jobs = response.data;
    },
      function errorCallback(response) {}
    );
  });

  app.controller("jobController", function ($scope, $http) {
    $http({method: 'GET',
      url: 'https://cors-anywhere.herokuapp.com/http://acid-api.technosophos.me:7745/v1/job/node-runner-1504302282234-800550b4',
      headers: {
        'Accept': 'application/json, text/javascript',
        'Content-Type': 'application/json; charset=utf-8'
      },
      isArray: true
    }).then(function successCallback(response) {
        $scope.job = response.data;
    },
      function errorCallback(response) {}
    );
  });

})();
