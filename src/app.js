/* eslint angular/controller-as: 0, no-unused-vars: 0, angular/log: 0 */
import angular from 'angular';
import ngResource from 'angular-resource';
import 'angular-gantt';
import hljs from 'angular-highlightjs';
import angularMoment from 'angular-moment';
import uiRouter from '@uirouter/angularjs';
import fastclick from 'fastclick';

import './assets/scss/app.scss';

angular.module('app.modules', [uiRouter])
  .config(routes)
  .controller('ProjectController', ProjectController)
  .controller('ProjectBuildsController', ProjectBuildsController)
  .controller('BuildController', BuildController)
  .controller('BuildsController', BuildsController)
  .controller('JobsController', JobsController)
  .controller('LogController', LogController)
;

/* @ngInject */
function routes($stateProvider) {
  $stateProvider
    .state({
      name: 'home',
      url: '/',
      controllerAs: 'ProjectBuildsController',
      template: require('./templates/home.html')
    })
    .state({
      name: 'build',
      url: '/build/:id',
      controllerAs: 'BuildController',
      controller: 'BuildController',
      template: require('./templates/build.html')
    })
    .state({
      name: 'project',
      url: '/project/:id',
      controllerAs: 'ProjectController',
      controller: 'ProjectController',
      template: require('./templates/project.html')
    })
  ;
}

/* @ngInject */
angular.module('app', [
  uiRouter,
  ngResource,
  hljs,
  angularMoment,
  'app.modules'
])
  .config(routingConfig)
  .config(httpConfig)
  .config(hljsSetup)
  .run(fastClick)
  .run(setupState)
;

/* @ngInject */
function routingConfig($urlRouterProvider, $locationProvider) {
  $urlRouterProvider.otherwise('/');

  $locationProvider.html5Mode({
    enabled: false,
    requireBase: false
  });

  $locationProvider.hashPrefix('!');
}

/* @ngInject */
function httpConfig($httpProvider) {
  // Needed for CORS support with the default brigade API configured for kashti
  $httpProvider.defaults.useXDomain = true;
  delete $httpProvider.defaults.headers.common['X-Requested-With'];
  $httpProvider.defaults.headers.common = {
    Accept: 'application/json, text/javascript',
    'Content-Type': 'application/json; charset=utf-8'
  };
}

/* @ngInject */
function hljsSetup(hljsServiceProvider) {
  hljsServiceProvider.setOptions({
    // Replace tab with 4 spaces
    tabReplace: '    '
  });
}

/* @ngInject */
function fastClick($document) {
  fastclick.attach($document[0].body);
}

/* @ngInject */
function setupState($rootScope, $state, $stateParams) {
  $rootScope.$state = $state;
  $rootScope.$stateParams = $stateParams;
}

/* @ngInject */
function ProjectController($scope, $stateParams, $http) {
  const currentProject = $stateParams;

  $http({
    method: 'GET',
    url: brigadeApiURL + '/v1/project/' + currentProject.id,
    isArray: true,
  }).then(response => {
    $scope.project = response.data;
  },
  response => { }
  );
}
/* @ngInject */
function ProjectBuildsController($scope, $stateParams, $http) {
  $http({
    method: 'GET',
    url: brigadeApiURL + '/v1/projects-build',
    isArray: true,
  }).then(response => {
    $scope.projectsbuilds = response.data;
  },
  response => { }
  );
}

/* @ngInject */
function BuildController($scope, $stateParams, $http) {
  const currentBuild = $stateParams;

  $http({
    method: 'GET',
    url: brigadeApiURL + '/v1/build/' + currentBuild.id,
    isArray: true
  }).then(response => {
    $scope.build = response.data;
  },
  response => { }
  );
}

/* @ngInject */
function BuildsController($scope, $stateParams, $http) {
  const currentProject = $stateParams;

  $http({
    method: 'GET',
    url: brigadeApiURL + '/v1/project/' + currentProject.id + '/builds',
    isArray: true
  }).then(response => {
    $scope.builds = response.data;
  },
  response => { }
  );
}

/* @ngInject */
function JobsController($scope, $stateParams, $http) {
  const currentBuild = $stateParams;

  $http({
    method: 'GET',
    url: brigadeApiURL + '/v1/build/' + currentBuild.id + '/jobs',
    isArray: true
  }).then(response => {
    $scope.jobs = response.data;
  },
  response => { }
  );
}

/* @ngInject */
function LogController($scope, $stateParams, $http) {
  const currentJobID = $scope.job.id;

  $http({
    method: 'GET',
    url: brigadeApiURL + '/v1/job/' + currentJobID + '/logs?stream=true',
    responseType: 'text',
  }).then(response => {
    $scope.logs = response.data;
  }, response => {
    $scope.logerror = response.status;
    console.log('Job > Logs endpoint returned ' + response.status + ', citing \'' + response.message + '\'.');
  });
}

