(function() {
  'use strict';

  var app =  angular.module('application', [
    'ui.router',
    'ngResource',
    'ngAnimate',
    'hljs',
    'angularMoment',
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
  }])

  app.config(function (hljsServiceProvider) {
    hljsServiceProvider.setOptions({
      // replace tab with 4 spaces
      tabReplace: '    '
    });
  })

  config.$inject = ['$urlRouterProvider', '$locationProvider'];

  app.filter('capitalize', function() {
      return function(input) {
        return (!!input) ? input.charAt(0).toUpperCase() + input.substr(1).toLowerCase() : '';
      }
  });

  app.filter('orderObjectBy', function() {
    return function(items, field, reverse) {
      var filtered = [];
      angular.forEach(items, function(item) {
        filtered.push(item);
      });
      filtered.sort(function (a, b) {
        return (a[field] > b[field] ? 1 : -1);
      });
      if(reverse) filtered.reverse();
      return filtered;
    };
  });

  app.filter('trim', function () {
    return function(value) {
      if(!angular.isString(value)) {
          return value;
      };
      return value.replace(/^\s+|\s+$/g, '');
    };
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

  // use service to share IDs between controllers
  // app.factory('jobService', function() {
  //   return {
  //     theJob: {}
  //   };
  // });


  // consume api for templates/views
  app.run(['$rootScope', '$state', '$stateParams',
    function ($rootScope, $state, $stateParams) {
      $rootScope.$state = $state;
      $rootScope.$stateParams = $stateParams;
  }])

  app.controller("projectsController", ['$scope', '$stateParams', '$http',
       function ($scope, $stateParams, $http) {
    $http({
      method: 'GET',
      url: baseURL + '/v1/projects',
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
  }]);

  app.controller("projectsbuildsController", ['$scope', '$stateParams', '$http',
       function ($scope, $stateParams, $http) {
    $http({
      method: 'GET',
      url: baseURL + '/v1/projects-build',
      isArray: true,
      headers: {
        'Accept': 'application/json, text/javascript',
        'Content-Type': 'application/json; charset=utf-8'
      }
    }).then(function successCallback(response) {
        $scope.projectsbuilds = response.data;
    },
      function errorCallback(response) {}
    );
  }]);

  app.controller("projectController", ['$scope', '$stateParams', '$http',
       function ($scope, $stateParams, $http) {

    var currentProject = $stateParams;

    $http({method: 'GET',
      url: baseURL + '/v1/project/' + currentProject.id,
      isArray: true,
      headers: {
        'Accept': 'application/json, text/javascript',
        'Content-Type': 'application/json; charset=utf-8'
      }
    }).then(function successCallback(response) {
        $scope.project = response.data;

        var projectID = $scope.project.name;
        console.log('the project is ' + projectID );
    },
      function errorCallback(response) {}
    );
  }]);

  app.controller("buildsController", ['$scope', '$stateParams', '$http',
       function ($scope, $stateParams, $http) {
    var currentProject = $stateParams;

    $http({method: 'GET',
      url: baseURL + '/v1/project/' + currentProject.id + '/builds',
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
  }]);

  app.controller("buildController", ['$scope', '$stateParams', '$http',
       function ($scope, $stateParams, $http) {
    var currentBuild = $stateParams;

    $http({method: 'GET',
      url: baseURL + '/v1/build/' + currentBuild.id,
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
  }]);

  app.controller("jobsController", ['$scope', '$stateParams', '$http',
       function ($scope, $stateParams, $http) {
    var currentBuild = $stateParams;

    $http({method: 'GET',
      url: baseURL + '/v1/build/' + currentBuild.id + '/jobs',
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
  }]);

  app.controller("jobController", ['$scope', '$stateParams', '$http',
         function ($scope, $stateParams, $http) {

    var currentJobID = $stateParams.id;

    $http({method: 'GET',
      url: baseURL + '/v1/job/' + currentJobID,
      headers: {
        'Accept': 'application/json, text/javascript',
        'Content-Type': 'application/json; charset=utf-8'
      },
      isArray: true
    }).then(function successCallback(response) {
      $scope.job = response.data;
    },
    function errorCallback(response) {
      console.log('Build > Job endpoint returned ' + response.status + ', citing \'' + response.message + '\'.');
    });
  }]);

  app.controller("logController", ['$scope', '$stateParams', '$http',
    function ($scope, $stateParams, $http) {
    var currentJobID = $scope.job.id;

    $http({method: 'GET',
      url: baseURL + '/v1/job/' + currentJobID + '/logs?stream=true',
      responseType: 'text',
      headers: {
        'Accept': 'plain/text, text/javascript',
        'Content-Type': 'plain/text; charset=utf-8'
      }
    }).then(function successCallback(response) {
      $scope.logs = response.data;
    },
    function errorCallback(response) {
      $scope.logerror = response.status;
      console.log('Job > Logs endpoint returned ' + response.status + ', citing \'' + response.message + '\'.');
    });
  }]);

})();
