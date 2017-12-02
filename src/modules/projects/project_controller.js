angular.module('app.projects').controller("ProjectController", ProjectController)

/* @ngInject */
function ProjectController($scope, $stateParams, $http) {
  var currentProject = $stateParams;

  $http({
    method: 'GET',
    url: baseURL + '/v1/project/' + currentProject.id,
    isArray: true,
    headers: {
      'Accept': 'application/json, text/javascript',
      'Content-Type': 'application/json; charset=utf-8'
    }
  }).then(function successCallback(response) {
    $scope.project = response.data;

    var projectID = $scope.project.name;
    console.log('the project is ' + projectID);
  },
    function errorCallback(response) { }
    );
}
