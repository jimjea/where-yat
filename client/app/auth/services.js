angular.module('where-yat.authServices', [])

.factory('Auth', function($firebase, $firebaseSimpleLogin) {
  var ref = new Firebase('https://where-yat.firebaseio.com/');
  var login = $firebaseSimpleLogin(ref);
  var sync = $firebase(ref);

  var authUser = function() {
    login.$login('facebook').then(function(user) {
      console.log('login successful')
    }, function(error) {
      console.error('Login failed');
    });
  };

  var logoutUser = function() {
    login.$logout();
  };


  return {
    authUser: authUser,
    logoutUser: logoutUser,
  };
})