angular.module('where-yat.auth', ['ui.router'])

.config(function($stateProvider) {
  $stateProvider
    .state('auth', {
      url: '/auth',
      templateUrl: 'app/auth/auth.html',
      controller: 'AuthController'
    })
})

.controller('AuthController', function($scope, $state, Auth) {
  $scope.signin = Auth.authUser;
  $scope.logout = Auth.logoutUser;
})