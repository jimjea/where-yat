angular.module('where-yat.authServices', [])

.factory('Auth', function($firebase, $firebaseSimpleLogin) {
  var ref = new Firebase('https://where-yat.firebaseio.com/');
  var user = $firebaseSimpleLogin(ref);

  var authUser = function() {
    user.$login('facebook',{preferRedirect: true}).then(function(user) {
      console.log('worked');
    }, function(error) {
      console.error('Login failed');
    });
  };

  var logoutUser = function() {
    user.$logout();
  }

  return {
    authUser: authUser,
    ref: ref,
    logoutUser: logoutUser
  };
})