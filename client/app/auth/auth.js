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
  $scope.logout = function() {
    $state.go('auth');
    Auth.logoutUser();
  }

  // SAVE USER DATA (USERNAME, FB ID, GENDER, TIMESTAMP, LOCATION)
    // FIRST SAVE THE USERNAME AND ID AND GENDER
      // CHECK AGAINST UNIQUE USER ID
        // SAVE LOCATION DATA BASED ON UNIQUE ID
})