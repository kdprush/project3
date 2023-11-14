function init(){
	var el = document.getElementById('frame');
	var myLocation = new google.maps.LatLng(41.87244587337107, -87.79992174911762);
	var mapOptions = {
		center: myLocation,
		zoom: 15,
		mapTypeId: google.maps.MapTypeId.SATELLITE,
		mapTypeControlOptions: {
			position: google.maps.ControlPosition.BOTTOM_CENTER
		}
	};

	var myMap = new google.maps.Map(el, mapOptions);

	var marker = new google.maps.Marker({
		position: myLocation,
		map: myMap,
		animation: google.maps.Animation.DROP,
		icon: 'media/OPAnimalCareLeague.jpg'
	});

	var contentString = '<h1>Oak Park Animal Care League</h1><p>This is the place where I adopted Spunk and Chester. 1011 Garfield St, Oak Park, IL 60304. Ask for Liz, the Bunny Lady.</p>';

	var infowindow = new google.maps.InfoWindow({
      content: contentString
  	});

	google.maps.event.addListener(marker, 'mouseover', function() {
    	infowindow.open(myMap, marker);
  	});


}

google.maps.event.addDomListener(window, 'load', init);