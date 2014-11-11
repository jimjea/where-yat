angular.module('where-yat',[
  'firebase',
  'where-yat.auth',
  'where-yat.authServices',
  'where-yat.map',
])

.config(function($urlRouterProvider) {
  $urlRouterProvider.otherwise('/auth');
})