angular.module('where-yat.map',['ui.router'])

.config(function($stateProvider) {
  $stateProvider
    .state('map', {
      url: '/map',
      templateUrl: 'app/map/map.html',
      controller: 'MapController'
    })
})

.controller('MapController', function($scope) {
  
})