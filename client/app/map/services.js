angular.module('where-yat.mapServices', [])

.factory('Map', function($firebase, $firebaseSimpleLogin, $q) {
  var ref = new Firebase('https://where-yat.firebaseio.com/');
  var login = $firebaseSimpleLogin(ref);
  var sync = $firebase(ref);

  var getCurrentLocation = function() {
    var location = {};
    var defer = $q.defer();

    navigator.geolocation.getCurrentPosition(function(position) {
      login.$getCurrentUser().then(function(user) {
        ref.child(user.id).set({
          displayname: user.displayName,
          gender: user.thirdPartyUserData.gender,
          picture: user.thirdPartyUserData.picture.data.url,
          lat: position.coords.latitude,
          lng: position.coords.longitude
        })
      })
      // location.point = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
      location.lng = position.coords.longitude;
      location.lat = position.coords.latitude;
      defer.resolve(location);
    })

    return defer.promise;
  }


  return {
    getCurrentLocation: getCurrentLocation
  }
})