angular.module('where-yat.mapServices', [])

.factory('Map', function($firebase, $firebaseSimpleLogin, $q) {
  var ref = new Firebase('https://where-yat.firebaseio.com/');
  var login = $firebaseSimpleLogin(ref);
  var sync = $firebase(ref);

  var getCurrentLocation = function() {
    var location = {};
    var defer = $q.defer();

    navigator.geolocation.getCurrentPosition(function(position) { // data not saving on inital sign in, only on refresh of the page on Map state
      login.$getCurrentUser().then(function(user) {
        ref.child(user.id).set({
          id: user.id,
          displayname: user.displayName,
          gender: user.thirdPartyUserData.gender,
          picture: user.thirdPartyUserData.picture.data.url,
          lat: position.coords.latitude,
          lng: position.coords.longitude,
          timeStamp: Firebase.ServerValue.TIMESTAMP
        })
        location.pic = user.thirdPartyUserData.picture.data.url;
        location.lng = position.coords.longitude;
        location.lat = position.coords.latitude;
        location.id = user.id;
        defer.resolve(location);
      })
    })

    return defer.promise;
  }


  var getAllLocations = function() {
    var guys = [];
    var girls = [];
    var newObj = {};
    var defer = $q.defer();

    ref.on('child_added', function(children) {
      if (children.val().gender === 'female') {
        girls.push(children.val());
      } else {
        guys.push(children.val());
      }
      defer.resolve([girls, guys])
    })

    return defer.promise;

  }




  return {
    getCurrentLocation: getCurrentLocation,
    getAllLocations: getAllLocations
  }
})