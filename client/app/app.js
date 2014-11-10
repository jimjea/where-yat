angular.module('where-yat',[
  'firebase',
  'where-yat.auth',
  'where-yat.authServices',
])

.config(function($urlRouterProvider) {
  $urlRouterProvider.otherwise('/auth');
})