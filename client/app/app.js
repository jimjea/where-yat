angular.module('where-yat',[
  'firebase',
  'where-yat.auth'
])

.config(function($urlRouterProvider) {
  $urlRouterProvider.otherwise('/signin');
})