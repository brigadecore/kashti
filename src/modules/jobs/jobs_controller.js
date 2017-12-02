angular.module('app.jobs').controller("JobsController", JobsController)

/* @ngInject */
function JobsController($scope, $stateParams, $http) {
  var currentBuild = $stateParams;

  $http({
    method: 'GET',
    url: baseURL + '/v1/build/' + currentBuild.id + '/jobs',
    headers: {
      'Accept': 'application/json, text/javascript',
      'Content-Type': 'application/json; charset=utf-8'
    },
    isArray: true
  }).then(function successCallback(response) {
    $scope.jobs = response.data;
  },
    function errorCallback(response) { }
  );
}
