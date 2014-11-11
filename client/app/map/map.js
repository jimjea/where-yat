angular.module('where-yat.map',['ui.router', 'google-maps'.ns()])

.config(function($stateProvider) {
  $stateProvider
    .state('map', {
      url: '/map',
      templateUrl: 'app/map/map.html',
      controller: 'MapController'
    })
})

.controller('MapController', function($scope, $state, Auth, Map) {
  $scope.logout = function() {
    $state.go('auth');
    Auth.logoutUser();
  }

  // sets the center of the map and has the marker logic for the user
  $scope.getlocation = function() {
    Map.getCurrentLocation().then(function(data) {
      $scope.id = 0;
      $scope.map = {center: {
        latitude: data.lat,
        longitude: data.lng}, zoom: 13
      }
    })
  }

  $scope.getlocation();
})