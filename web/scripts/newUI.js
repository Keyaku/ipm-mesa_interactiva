/***** Variables *****/
var timer;
var mainMenuAnimSpeed = 500;

/****** Code execution *******/
$(document).ready(function(){
	// Showing default overlay
	$(".overlay").hide();
	$("#overlayOrder").show();


	$(".doneIcon").append('<svg fill="#FFFFFF" height="48" viewBox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"/><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></svg>');

	// Activating arrow toggle
	$("#arrowIcon").click(function() {
		var main = $("#superBar");
		if (main.css("left") == "0px") {
			main.animate({"left": "-300px"}, mainMenuAnimSpeed);
			$(".overlay").animate({"left": "48px"}, mainMenuAnimSpeed);
			$(this).css("transform", "scaleX(-1)");
		}
		else {
			main.animate({"left": "0px"}, mainMenuAnimSpeed);
			$(".overlay").animate({"left": "348px"}, mainMenuAnimSpeed);
			$(this).css("transform", "scaleX(1)");
		}
	});

	//Show the correct overlay
	$(".mainMenuButton").click(function() {
		$(".overlay").hide() // Hide ALL submenus, just in case
		$("#overlay" + $(this).children(".menuTitle").text()).css("display", "block") // Show the appropriate submenu
	});

	$(".pizzaMakerItem").click(function() {
		$(this).children(".doneIcon").children().css("fill", "green");
		$(this).children(".orderName").css("color", "white");
	});

	//Google Maps search
	$("#barButton").click(function() { searchMap("bar+taguspark"); });
	$("#mallButton").click(function() { searchMap("centro+comercial+oeiras"); });
	$("#movietheaterButton").click(function() { searchMap("cinema+oeiras"); });
	$("#carButton").click(function() { directionsMap($("#mapsDestinationInput").val(), "driving"); });
	$("#publicTransportButton").click(function() { directionsMap($("#mapsDestinationInput").val(), "transit"); });

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


/***** Ordered elements list -related code *****/
function showBanner(text) {
	clearTimeout(timer);
	$("#orderElementsListBanner").css("background","rgba(255,140,0,1)").css("color","rgba(255,255,255,1)").children(".orderName").text(text);
	timer = setTimeout(function() { $("#orderElementsListBanner").css("background","rgba(255,140,0,0)").css("color","rgba(255,255,255,0)") }, 3000);
}
