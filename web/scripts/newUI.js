/***** Variables *****/
var timer;

/****** Code execution *******/
$(document).ready(function(){
	// Showing default overlay
	$("#overlayOrder").show();

	//Adds classes so that the html isn't cluttered
	$(".verticalBarButton").children("label").addClass("menuTitle");
	$(".informationSubMenu").children("label").addClass("informationSubMenuTitle");
	$(".orderElementsRow").children("td:contains('+')").addClass("orderIncrement");

	$(".doneIcon").append('<svg fill="#FFFFFF" height="48" viewBox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"/><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></svg>');
	$(".doneIcon svg").css("fill", "black");

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
});

/***** Ordered elements list -related code *****/
function showBanner(text) {
	clearTimeout(timer);
	$("#orderElementsListBanner").css("background","rgba(255,140,0,1)").css("color","rgba(255,255,255,1)").children(".orderName").text(text);
	timer = setTimeout(function() { $("#orderElementsListBanner").css("background","rgba(255,140,0,0)").css("color","rgba(255,255,255,0)") }, 3000);
}
