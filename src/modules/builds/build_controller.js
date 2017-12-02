angular.module('app.builds').controller("BuildController", BuildController)

  /* @ngInject */
function BuildController($scope, $stateParams, $http) {
  var currentBuild = $stateParams;

  $http({
    method: 'GET',
    url: baseURL + '/v1/build/' + currentBuild.id,
    headers: {
      'Accept': 'application/json, text/javascript',
      'Content-Type': 'application/json; charset=utf-8'
    },
    isArray: true
  }).then(function successCallback(response) {
    $scope.build = response.data;
  },
    function errorCallback(response) { }
    );
  }
