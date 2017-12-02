angular.module('app.builds').controller("BuildsController", BuildsController)

  /* @ngInject */
function BuildsController($scope, $stateParams, $http) {
  var currentProject = $stateParams;

  $http({
    method: 'GET',
    url: baseURL + '/v1/project/' + currentProject.id + '/builds',
    headers: {
      'Accept': 'application/json, text/javascript',
      'Content-Type': 'application/json; charset=utf-8'
    },
    isArray: true
  }).then(function successCallback(response) {
    $scope.builds = response.data;
  },
    function errorCallback(response) { }
    );
  }
