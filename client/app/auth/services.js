angular.module('where-yat.authServices', [])

.factory('Auth', function($firebase, $firebaseSimpleLogin) {
  var ref = new Firebase('https://where-yat.firebaseio.com/');
  var login = $firebaseSimpleLogin(ref);
  var sync = $firebase(ref);

  var authUser = function() {
    login.$login('facebook',{preferRedirect: true}).then(function(user) {
      console.log('User signed in')
    }, function(error) {
      console.error('Login failed');
    });
  };

  var logoutUser = function() {
    login.$logout();
  };

  return {
    authUser: authUser,
    ref: ref,
    logoutUser: logoutUser
  };
})