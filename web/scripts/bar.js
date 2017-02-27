/***** Variables *****/
var timer;
var directionsService;
var directionsDisplay;
var map;
var service;
var loc = {lat:38.73727772078954,lng:-9.303122609853745};

/***** Function declarations *****/
function openBrowser(link) {
	// makes all the social media buttons shrink
	$(".fa").css("height", "150px");
	$(".fa").css("padding", "50px 40px 0 40px");
	// makes the browser visible
	$("#browSM").show();
	// opens the correct page
	$("#browSM").attr("src", link);
}

function showSubMenu(menu) {
	$(".overlay").hide() // Hide ALL submenus, just in case
	$("#" + menu).css("display", "inline-block") // Show the appropriate submenu
}

/***** Timer-related code *****/
$("#countdown").countdown360({
	// Pie configuration
    radius      : 60.5,                  // radius of arc
    strokeStyle : "darkorange",          // the color of the stroke
    strokeWidth : 3,                     // the stroke width, dynamically calulated if omitted in options
    fillStyle   : "#333",                // the fill color
	smooth      : true,                  // update the ticks every 16ms when true

	// Font configuration
    fontColor   : "white",               // the font color
    fontFamily  : "sans-serif",          // the font family
    fontSize    : undefined,             // the font size, dynamically calulated if omitted in options
    fontWeight  : 700,                   // the font weight

	// Timer configuration
    autostart   : true,                  // start the countdown automatically
    seconds     : 120,                    // the number of seconds to count down
    startOverAfterAdding: true,          // Start the timer over after time is added with addSeconds
    onComplete  : function() {}
}).start()

/***** Ordered elements list -related code *****/
function showBanner(text) {
	clearTimeout(timer);
	$("#orderElementsListBanner").css("background","rgba(255,140,0,1)").css("color","rgba(255,255,255,1)").children(".orderName").text(text);
	timer = setTimeout(function() { $("#orderElementsListBanner").css("background","rgba(255,140,0,0)").css("color","rgba(255,255,255,0)") }, 3000);
}

/****** Code execution *******/
$(document).ready(function(){
	// Showing default overlay
	$("#overlayOrder").show();

	// Activating arrow toggle
	$("#arrowIcon").click(function() {
		var menu = $('#mainMenu');
		menu.toggle(!menu.is(':visible')); // Switches between hidden and shown
		$(this).toggleClass("open");       // Enables rotation/flipping
	});

	// Activating order triggers
	$('.orderIncrement').click(function() {
		var counter = $(this).siblings('.orderNumber');
    	counter.text(parseInt(counter.text()) + 1 + "x");
    	var bannerText = $(this).siblings('.orderName').text();
    	showBanner(bannerText);
	});

	//Activating public transport submenu in "information" overlay
	$("#publicTransportButton").click(function() {
		$(".publictransportSubButton").toggle(".visible").css("display", "inline-block");
	});



	//Activates the Google Maps searches for the Public Transport submenu
	$("#subwayButton").click(function() {
		//travel("amadora este estação de metro", 'WALKING');
		console.log("SUBWAY");

		var pyrmont = new google.maps.LatLng(-33.8665433,151.1956316);
		var request = { location: pyrmont, radius: '500', query: 'restaurant' };
		service = new google.maps.places.PlacesService(map);
		service.textSearch(request, callback);


	});
	$("#busButton").click(function() {
		travel("amadora este estação de metro", 'WALKING');
		console.log("BUS");
	});
	$("#trainButton").click(function() {
		console.log($(this).children(".subMenuTitle").text());
	});
});


var service;


/****** Google Maps API interface *******/
function initMap() {
	directionsService = new google.maps.DirectionsService;
	directionsDisplay = new google.maps.DirectionsRenderer;
	var map = new google.maps.Map(document.getElementById("mapGoogle"), { center: loc, zoom: 13, disableDefaultUI: true});
	directionsDisplay.setMap(map);
}

function callback(results, status) {
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      var place = results[i];
	  console.log(place);
	  createMarker(results[i]);
    }
  }
}

function calculateAndDisplayRoute(dest, tMode) {
	directionsService.route({
		origin: loc,
		destination: dest,
		travelMode: tMode
	}, function(response, status) {
		if (status === 'OK') directionsDisplay.setDirections(response);
		else window.alert('Directions request failed due to ' + status);
	});
}

function travel(dest, travelMode) { calculateAndDisplayRoute(dest, 'WALKING'); }
function nearby() { }
function nearbySearch(keyWords) { }
