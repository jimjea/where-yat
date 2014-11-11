angular.module('where-yat.authServices', [])

.factory('Auth', function($firebase, $firebaseSimpleLogin, $state) {
  var ref = new Firebase('https://where-yat.firebaseio.com/');
  var login = $firebaseSimpleLogin(ref);
  var sync = $firebase(ref);

  var authUser = function() {
    login.$login('facebook').then(function(user) {
      ref.child(user.id).set({
        displayname: user.displayName,
        gender: user.thirdPartyUserData.gender,
        picture: user.thirdPartyUserData.picture.data.url,
      })
      // $state.go('map');
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