/***** Constants *****/
const ANIM_SPEED_MENU = 500;

/***** Variables *****/
var timer;

/****** Code execution *******/
$(document).ready(function(){
	// Starting svg4everybody
	svg4everybody();

	// Showing default overlay
	$('.overlay').hide();
	$('.overlay#order').show();

	$('.informationSubMenu').children('label').addClass('informationSubMenuTitle');
	$('.informationSubMenu div.subMenuIcon').css('filter', 'invert(100%)');
});

/***** Overlay content *****/
// Activating arrow toggle
$('#minimizer').click(function() {
	$('#menuOptions').toggle(ANIM_SPEED_MENU);
	$(this).toggleClass('closed');
});

//Show the correct overlay
$('.menuButton').click(function() {
	$('.overlay').hide(); // Hide ALL submenus, just in case

	var b = $('main');
	var name = $(this).children('.menuTitle').text().toLowerCase();

	switch (name) {
		case 'order':
			b.css('background-image', 'url("../img/menuBannerDrinks.jpg")');
			break;
		default:
			b.css('background-image', 'url("../img/tableBack2.jpg")');
	}

	$('.overlay#' + name).show(); // Show the appropriate submenu
});

$('.pizzaMakerItem').click(function() {
	$(this).children('.doneIcon').children().css('fill', 'green');
	$(this).children('.orderName').css('color', 'white');
});

//Google Maps search
$('#barButton').click(function() { searchMap('bar+taguspark'); });
$('#mallButton').click(function() { searchMap('centro+comercial+oeiras'); });
$('#carButton').click(function() { directionsMap($('#mapsDestinationInput').val(), 'driving'); });
$('#publicTransportButton').click(function() { directionsMap($('#mapsDestinationInput').val(), 'transit'); });

/***** Timer-related code *****/
// TODO: Add countdown element in page

/***** Ordered elements list -related code *****/
function showBanner(text) {
	clearTimeout(timer);
	$('#orderElementsListBanner').css('background','rgba(255,140,0,1)').css('color','rgba(255,255,255,1)').children('.orderName').text(text);
	timer = setTimeout(function() { $('#orderElementsListBanner').css('background','rgba(255,140,0,0)').css('color','rgba(255,255,255,0)') }, 3000);
}
