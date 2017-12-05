angular.module('app.logs').controller("LogController", LogController)

  /* @ngInject */
function LogController($scope, $stateParams, $http) {
  var currentJobID = $scope.job.id;

  $http({
    method: 'GET',
    url: baseURL + '/v1/job/' + currentJobID + '/logs?stream=true',
    responseType: 'text',
    headers: {
      'Accept': 'plain/text, text/javascript',
      'Content-Type': 'plain/text; charset=utf-8'
    }
  }).then(function successCallback(response) {
    $scope.logs = response.data;
  },function errorCallback(response) {
      $scope.logerror = response.status;
      console.log('Job > Logs endpoint returned ' + response.status + ', citing \'' + response.message + '\'.');
    });
}
