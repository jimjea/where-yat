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
  $scope.getCurrentLocation = function() {
    Map.getCurrentLocation().then(function(data) {
      $scope.user = {
        id: 0,
        position: {
          latitude: data.lat,
          longitude: data.lng
        }
      };
      $scope.map = {center: {
        latitude: data.lat,
        longitude: data.lng}, zoom: 18
      }
    })
  }

  $scope.getAllLocations = function() {
    Map.getAllLocations().then(function(data) {
      $scope.allUsers = data;
    })
  }

  $scope.guys = {
    url: './assets/guys.png',
  };
  $scope.girls = {
    url: './assets/girls.png',
  };

  $scope.getAllLocations();
  $scope.getCurrentLocation();
})