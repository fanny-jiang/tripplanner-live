$(function initializeMap () {

  const fullstackAcademy = new google.maps.LatLng(40.705086, -74.009151);

  const styleArr = [
    {
      featureType: 'landscape',
      stylers: [{ saturation: -100 }, { lightness: 60 }]
    },
    {
      featureType: 'road.local',
      stylers: [{ saturation: -100 }, { lightness: 40 }, { visibility: 'on' }]
    },
    {
      featureType: 'transit',
      stylers: [{ saturation: -100 }, { visibility: 'simplified' }]
    },
    {
      featureType: 'administrative.province',
      stylers: [{ visibility: 'off' }]
    },
    {
      featureType: 'water',
      stylers: [{ visibility: 'on' }, { lightness: 30 }]
    },
    {
      featureType: 'road.highway',
      elementType: 'geometry.fill',
      stylers: [{ color: '#ef8c25' }, { lightness: 40 }]
    },
    {
      featureType: 'road.highway',
      elementType: 'geometry.stroke',
      stylers: [{ visibility: 'off' }]
    },
    {
      featureType: 'poi.park',
      elementType: 'geometry.fill',
      stylers: [{ color: '#b6c54c' }, { lightness: 40 }, { saturation: -40 }]
    }
  ];

  const mapCanvas = document.getElementById('map-canvas');

  const currentMap = new google.maps.Map(mapCanvas, {
    center: fullstackAcademy,
    zoom: 13,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    styles: styleArr
  });

  const iconURLs = {
    hotel: '/images/lodging_0star.png',
    restaurant: '/images/restaurant.png',
    activity: '/images/star-3.png'
  };

  function drawMarker (type, coords) {
    const latLng = new google.maps.LatLng(coords[0], coords[1]);
    const marker = new google.maps.Marker({
      position: latLng,
      icon: iconURLs[type]
    });
    marker.setMap(currentMap);
  }

var markedLocations = [];

  function blueAddButton () {
    $("button[data-type='hotels'][data-action='add']").click(function() {
      // var coordinates = [];
      var hotelName = $("select[data-type='hotels'] option:selected").val();

      var hotelObj = hotels.find(function(element) {
        return element.name === hotelName;
      });

      var coordinates = hotelObj.place.location;

      drawMarker("hotel", coordinates);
    })

    $("button[data-type='restaurants'][data-action='add']").click(function() {
      // var coordinates = [];
      var restaurantName = $("select[data-type='restaurants'] option:selected").val();

      var restaurantObj = restaurants.find(function(element) {
        return element.name === restaurantName;
      });

      var coordinates = restaurantObj.place.location;

      drawMarker("restaurant", coordinates);
    })

    $("button[data-type='activities'][data-action='add']").click(function() {
      // var coordinates = [];
      var activityName = $("select[data-type='activities'] option:selected").val();

      var activityObj = activities.find(function(element) {
        return element.name === activityName;
      });

      var coordinates = activityObj.place.location;

      drawMarker("activity", coordinates);
    })

  }

  function removeMarker (type, coords) {
    const latLng = new google.maps.LatLng(coords[0], coords[1]);
    const marker = new google.maps.Marker({
      position: latLng,
      icon: iconURLs[type]
    });
    marker.setMap(null);
  }

  function removeRedButton() {
    $('#itinerary').on('click', '.remove', function () {
      $(this).parent().remove()
    });


    removeMarker(type, coordinates);
  }


  // drawMarker('hotel', [40.705137, -74.007624]);
  // drawMarker('restaurant', [40.705137, -74.013940]);
  // drawMarker('activity', [40.716291, -73.995315]);
blueAddButton();


});
