/***** Variables *****/
var timer;

/****** Code execution *******/
$(document).ready(function(){
	// Showing default overlay
	$("#overlayOrder").show();

	$(".verticalBarButton").children().addClass("menuTitle");


	// Activating arrow toggle
	$("#arrowIcon").click(function() {
		$('#mainMenu').toggle(); // Switches between hidden and shown
		$(this).css("transform", "scaleX(-1)");
	});

	//Show the correct overlay
	$(".verticalBarButton").click(function() {
		$(".overlay").hide() // Hide ALL submenus, just in case
		$("#overlay" + $(this).children(".menuTitle").text()).css("display", "inline-block") // Show the appropriate submenu
	});

	// Activating order triggers
	$('.orderIncrement').click(function() {
		var counter = $(this).siblings().first();
    	counter.text(parseInt(counter.text()) + 1 + "x");
    	showBanner($(this).siblings('.orderName').text());
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
