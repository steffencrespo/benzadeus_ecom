$(document).ready(function() {
  
  var map = new GMaps({
    div: '#map',
    lat: -30.02770410,
    lng: -51.22873460,
    zoom: 13
  });
    
  $.each(places, function(i, place) {
    GMaps.geocode({
      address: place.info,
      callback: function(results, status) {
        if (status == 'OK') {
          var latlng = results[0].geometry.location;
          map.setCenter(latlng.lat(), latlng.lng());
          map.addMarker({
            lat: latlng.lat(),
            lng: latlng.lng(),
            infoWindow: {
              content:  '<p>'+place.name+'</p>' + 
                        '<p>'+place.info.replace(/\n/g, '<br />')+'</p>'
            }
          });
        }
      }
    });
  });
  
});