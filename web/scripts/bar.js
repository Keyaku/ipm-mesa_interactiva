/***** Variables *****/
var timer;
var directionsService;
var directionsDisplay;
var map;

var loc = {lat:38.73727772078954,lng:-9.303122609853745};

var googleMapsOrigin = "&origin=taguspark";
var googleMapsMode = "transit";
var googleMapsUnits = "&units=metric";

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

	//Google Maps search
	$("#barButton").click(function() { searchMap("bar+taguspark"); });
	$("#mallButton").click(function() { searchMap("centro+comercial+oeiras"); });
	$("#mallButton").click(function() { searchMap("centro+comercial+oeiras"); });

});

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

/***** Overlays code *****/
function showSubMenu(menu) {
	$(".overlay").hide() // Hide ALL submenus, just in case
	$("#" + menu).css("display", "inline-block") // Show the appropriate submenu
}

/***** Ordered elements list -related code *****/
function showBanner(text) {
	clearTimeout(timer);
	$("#orderElementsListBanner").css("background","rgba(255,140,0,1)").css("color","rgba(255,255,255,1)").children(".orderName").text(text);
	timer = setTimeout(function() { $("#orderElementsListBanner").css("background","rgba(255,140,0,0)").css("color","rgba(255,255,255,0)") }, 3000);
}

/***** Social Networks code *****/
function openBrowser(link) {
	// makes all the social media buttons shrink
	$(".fa").css("height", "150px");
	$(".fa").css("padding", "50px 40px 0 40px");
}

/****** Google Maps code *******/
function searchMap(keyWords) {
	var url = "https://www.google.com/maps/embed/v1/search?key=AIzaSyB1UiEgTrMu4oUPFCxorbwhTBMbX19RVGo&q="+keyWords;
	$("#iframeMap").attr("src", url);
}
