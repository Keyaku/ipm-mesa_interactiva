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
	$("#" + menu).show() // Show the appropriate submenu
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
		var i = $(this).parent().index();
    	counter.text(parseInt(counter.text()) + 1 + "x");
	});
});
