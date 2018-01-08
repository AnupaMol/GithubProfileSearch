var app = angular.module('app', ['ngResource']);   
app.controller('searchController', ['$scope', '$resource', 'getUserInfo', function($scope, $resource, getUserInfo) {

  $scope.userNotFound = false;
  $scope.userFound = false;

  $scope.getInfo = function() {
    getUserInfo.userInfo($scope.username).get().$promise
    .then(function(response) {
      if (response.name == "") 
        response.name = response.login;
      $scope.user = response;
      $scope.userFound = true;
      $scope.userNotFound = false;
    })
    .catch(function (error) {
      $scope.userNotFound = true;
      $scope.userFound = false;
    });
  }

}]);