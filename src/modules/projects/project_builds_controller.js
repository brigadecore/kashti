angular.module('app.projects').controller("ProjectBuildsController", ProjectBuildsController);

/* @ngInject */
function ProjectBuildsController($scope, $stateParams, $http) {
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
    function errorCallback(response) { }
    );
}
