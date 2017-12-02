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
    'app.builds'
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

  angular.module('app').filter('trim', function () {
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

  // consume api for templates/views
  angular.module('app').run(['$rootScope', '$state', '$stateParams',
    function ($rootScope, $state, $stateParams) {
      $rootScope.$state = $state;
      $rootScope.$stateParams = $stateParams;
  }])

  angular.module('app').controller("jobsController", ['$scope', '$stateParams', '$http',
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

  angular.module('app').controller("jobController", ['$scope', '$stateParams', '$http',
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

  angular.module('app').controller("logController", ['$scope', '$stateParams', '$http',
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
